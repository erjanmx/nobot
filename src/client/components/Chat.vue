<template>
  <div class="chat">
    <ChatHeader :status="botStatus" />
    <ChatHistory :messages="messages" />
    <ChatControls v-on:new-message="newMessage" v-on:user-follow="userFollow" v-on:user-unfollow="userUnfollow" />
  </div>
</template>

<script>
import ChatHeader from './ChatHeader.vue'
import ChatHistory from './ChatHistory.vue'
import ChatControls from './ChatControls.vue'

const socket = require('socket.io-client')('http://127.0.0.1:3000')

function parseBlob(response) {
  return response.blob()
}

// todo
socket.on('stream', function(data) {
  app.bot_status = 'connected'

  console.log(data)
  if (data.post_params.content) {
    const msg_id = Date.now()

    if (data.post_params.type === 'media/image') {
      fetch(file_api_url + data.post_params.content).then(parseBlob).then(function (blob) {
        const img = document.getElementById(msg_id)
        img.src = URL.createObjectURL(blob)
      })
    }

    app.messages.push({
      'msg_id': msg_id,
      'type': data.post_params.type,
      'from_bot': true,
      'content': data.post_params.content,
    })
  }
})


export default {
    data () {
        return {
            botStatus: 'Offline',
            messages: []
        }
    },
    components: {
        ChatHeader, ChatHistory, ChatControls
    },
    methods: {
        newMessage(message) {
            this.messages.push(message)

            socket.emit('bot', {
                event: 'message/new',
                message: message
            })
        },
        userFollow() {
            socket.emit('bot', {event: 'user/follow'})
        },
        userUnfollow() {
            socket.emit('bot', {event: 'user/unfollow'})
        }
    }

}
</script>

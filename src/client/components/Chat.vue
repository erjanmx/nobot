<template>
    <div class="chat">
        <ChatHeader :status="status"/>
        <ChatHistory :messages="messages"/>
        <ChatControls v-on:new-message="newMessage" v-on:user-follow="userFollow" v-on:user-unfollow="userUnfollow"/>
    </div>
</template>

<script>
    import getFile from '../utils/getfile'

    import ChatHeader from './ChatHeader.vue'
    import ChatHistory from './ChatHistory.vue'
    import ChatControls from './ChatControls.vue'


    export default {
        data () {
            return {
                status: '',
                messages: []
            }
        },
        sockets: {
            connect () {
                this.status = 'online'
            },
            disconnect () {
                this.status = 'offline'
            },
            stream (data) {
                console.log(data)

                // chats/:id/write
                if (data.uri.match(/chats\/[0-9]+\/write/)) {
                    this.addMessage({
                        'type': data.post_params.type,
                        'from_bot': true,
                        'content': data.post_params.content
                    })
                    this.status = 'online'
                    // chats/:id/typing
                } else if (data.uri.match(/chats\/[0-9]+\/typing/)) {
                    this.status = 'typing...'
                    setTimeout(() => this.status = 'online', 5000)
                    // chats/:id/stoptyping
                } else if (data.uri.match(/chats\/[0-9]+\/stoptyping/)) {
                    this.status = 'online'
                }
            }
        },

        methods: {
            addMessage (message) {
                message.id = Date.now()

                if (message.type === 'media/image') {
                    this.renderImageMessage(message)
                }

                this.messages.push(message)
            },
            renderImageMessage (message) {
                getFile(message.content).then(function (blob) {
                    const img = document.getElementById(message.id)
                    img.src = URL.createObjectURL(blob)
                })
            },

            // emitted
            newMessage (message) {
                this.addMessage(message)

                this.$socket.emit('bot', {
                    event: 'message/new',
                    message: message
                })
            },
            userFollow () {
                this.$socket.emit('bot', {event: 'user/follow'})
            },
            userUnfollow () {
                this.$socket.emit('bot', {event: 'user/unfollow'})
            }
        },
        components: {
            ChatHeader, ChatHistory, ChatControls
        }
    }
</script>

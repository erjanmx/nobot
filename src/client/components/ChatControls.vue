<template>
    <div class="chat-message clearfix">
        <textarea v-on:keyup.enter="send" v-model="input" placeholder ="Type your message" rows="2"></textarea>

        <button v-on:click="send" class="right">Send</button>
        <button v-on:click="follow" class="left">Follow</button>
        <button v-on:click="unfollow" class="left">Unfollow</button>
    </div>
</template>

<script>
export default {
    data () {
        return {
            input: '',
        }
    },
    methods: {
        send () {
            if (this.input === '') return

            this.$emit('new-message', {
                'id':  Date.now(),
                'from_bot': false,
                'type': 'text/plain',
                'content': this.input,
            })

            this.input = ''
        },

        follow () {
            this.$emit('user-follow')
        },

        unfollow () {
            this.$emit('user-unfollow')
        }
    },
}
</script>

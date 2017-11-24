<template>
    <div class="chat-history" id="chat-history">
        <ul style="list-style-type: none;">
            <template v-for="message in messages">
                <ChatMessage :message="message"/>
            </template>
        </ul>
    </div>
</template>

<script>
    import ChatMessage from './ChatMessage.vue'

    export default {
        props: ['messages'],
        updated () {
            const el = document.getElementById('chat-history')
            el.scrollTop = el.scrollHeight
        },
        components: {
            ChatMessage
        }
    }
</script>

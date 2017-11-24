<template>
    <div id="app" class="container clearfix">
        <Chat/>
    </div>
</template>

<script>
    import Chat from './components/Chat.vue'

    export default {
        components: {
            Chat
        }
    }
</script>

<style lang="scss">
    @import './assets/app.scss';
</style>

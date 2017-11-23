<template>
    <div class="chat-header clearfix">
        <div class="chat-about">
          <div class="chat-with">Chat with Bot</div>
          <div class="status">
               {{ status }}
          </div>
        </div>
    </div>
</template>

<script>
export default {
  props: ['status']
}
</script>

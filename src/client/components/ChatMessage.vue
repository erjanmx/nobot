<template>
    <li class="clearfix">
        <div :class="message.from_bot ? 'left' : 'right'" class="message-data">
            <span class="message-data-name">{{ message.from_bot ? "Bot" : "You" }}</span>
            <i class="fa fa-circle me"></i>
        </div>
        <div :class="message.from_bot ? 'other-message' : 'my-message'" class="message">
            <pre v-if="message.type == 'text/plain'">{{ message.content }}</pre>
            <pre v-else>
                <img :id="message.id" src="images/loading.gif"/>
            </pre>
        </div>
    </li>
</template>

<script>
    export default {
        props: ['message']
    }
</script>

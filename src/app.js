/*jshint esversion: 6 */
import Vue from 'vue';

require('../assets/app.scss');

var socket = require('socket.io-client')('http://localhost:3000');

socket.on('stream', function(data){
  app.bot_status = 'connected';

  console.log(data);
  if (data.post_params.content) {
    app.messages.push({
      'from_bot': true,
      'content': data.post_params.content,
    });
  }
});

var app = new Vue({
    el: "#app",
    data: {
      input: '',
      messages: [],
      bot_status: 'not connected',
    },
    methods: {
      send: function (event) {
        if (this.input == '') {
            return;
        }

        this.messages.push({
            'from_bot': false,
            'content': this.input,
        });

        socket.emit('bot', 'message/new', this.input);

        this.input = '';
      },

      follow: function () {
        socket.emit('bot', 'user/follow');
      },

      unfollow: function () {
        socket.emit('bot', 'user/unfollow');
      }
    },
    updated: function() {
        var el = document.getElementById('chat-history');
        el.scrollTop = el.scrollHeight;
    }
});


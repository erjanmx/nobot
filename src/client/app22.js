/*jshint esversion: 6 */
import 'whatwg-fetch'
import Vue from 'vue';

require('./assets/app.scss');

// using proxy because n1 servers do not allow cross-origin requests
const file_api_url = 'https://cors-anywhere.herokuapp.com/https://files.namba1.co?token=';
const socket = require('socket.io-client')('http://127.0.0.1:3000');

function parseBlob(response) {
  return response.blob();
}

socket.on('stream', function(data) {
  app.bot_status = 'connected';

  console.log(data);
  if (data.post_params.content) {
    const msg_id = Date.now();

    if (data.post_params.type === 'media/image') {
      fetch(file_api_url + data.post_params.content).then(parseBlob).then(function (blob) {
        const img = document.getElementById(msg_id);
        img.src = URL.createObjectURL(blob);
      });
    }

    app.messages.push({
      'msg_id': msg_id,
      'type': data.post_params.type,
      'from_bot': true,
      'content': data.post_params.content,
    });
  }
});

const app = new Vue({
    el: "#app",
    data: {
      input: '',
      messages: [],
      bot_status: 'not connected',
    },
    methods: {
      send (event) {
        if (this.input === '') return;

        const msg_id = Date.now()

        this.messages.push({
            'msg_id': msg_id,
            'from_bot': false,
            'type': 'text/plain',
            'content': this.input,
        });

        socket.emit('bot', {
          event: 'message/new',
          message: {
            id: msg_id,
            type: 'text/plain',
            content: this.input
          }
        })

        this.input = '';
      },

      follow () {
        socket.emit('bot', {event: 'user/follow'});
      },

      unfollow () {
        socket.emit('bot', {event: 'user/unfollow'});
      }
    },
    updated () {
        const el = document.getElementById('chat-history');
        el.scrollTop = el.scrollHeight;
    }
});


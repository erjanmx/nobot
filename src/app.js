/*jshint esversion: 6 */
import Vue from 'vue'

require('./app.scss')

function getParameterByName(name, url) {
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

var socket = require('socket.io-client')('http://localhost:3000');

socket.on('stream', function(data){
  console.log(data);
  var content = getParameterByName('content', data.request_body);

  app.bot_status = 'connected';

  if (content) {
    app.messages.push({
      'from_bot': true,
      'content': content,
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

      connect: function () {
        socket.emit('bot', 'user/follow');
      }
    },
    updated: function() {
        var el = document.getElementById('chat-history');
        el.scrollTop = el.scrollHeight;
    }
});


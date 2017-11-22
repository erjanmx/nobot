const axios = require('axios')
const settings = require('../../settings.json');


module.exports = function(io) {
  io.on('connection', function(socket) {
    socket.on('bot', function(event, msg) {
      let params = {};
      switch (event) {
        case 'message/new':
          params = {
            event: event,
            data: {
              id: 1,
              content: msg,
              status: 0,
              type: 'text/plain',
              sender_id: 1,
              chat_id: 1
            }
          };
          break;
        case 'user/follow':
        case 'user/unfollow':
          params = {
            event: event,
            data: {
              id: 1,
              name: 'nobot',
              gender: 'M',
              birthdate: ''
            },
          };
          break;
      }
      console.log(params);
      axios.post(settings.bot_host, params)
      .catch(function (error) {
        console.log(error);
      })
    })
  })
}

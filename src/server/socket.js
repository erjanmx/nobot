const axios = require('axios')
const botUrl = require('../../settings.json').bot_url
const messageNewEvent = require('./utils/events/message_new')
const userFollowEvent = require('./utils/events/user_follow')
const userUnfollowEvent = require('./utils/events/user_unfollow')


module.exports = function(io) {
  io.on('connection', function(socket) {
    socket.on('bot', function(data) {
      let params = {};
      switch (data.event) {
        case 'message/new':
          params = messageNewEvent
          params.data.id = data.message.id
          params.data.type = data.message.type
          params.data.content = data.message.content
          break
        case 'user/follow':
          params = userFollowEvent
          break
        case 'user/unfollow':
          params = userUnfollowEvent
          break
      }
      axios.post(botUrl, params).catch((error) => console.log(error))
    })
  })
}

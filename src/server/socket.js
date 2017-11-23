const request = require('request-promise')
const botUrl = require('../../settings.json').bot_url
const messageNewEvent = require('./utils/events/message_new')
const userFollowEvent = require('./utils/events/user_follow')
const userUnfollowEvent = require('./utils/events/user_unfollow')


module.exports = function(io) {
  io.on('connection', function(socket) {
    socket.on('bot', function(data) {
      let event = {}
      switch (data.event) {
        case 'message/new':
          event = messageNewEvent
          event.data.id = data.message.id
          event.data.type = data.message.type
          event.data.content = data.message.content
          break
        case 'user/follow':
          event = userFollowEvent
          break
        case 'user/unfollow':
          event = userUnfollowEvent
          break
      }
      const options = {
        url: botUrl,
        body: event,
        json: true,
        method: 'post'
      }
      request(options).catch((error) => console.log(error))
    })
  })
}

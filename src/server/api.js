const url = require('url');
const router = require('express').Router()
const chatsWriteResponse = require('./utils/responses/chats_write')
const chatsCreateResponse = require('./utils/responses/chats_create')
const chatsTypingResponse = require('./utils/responses/chats_typing')
const chatsStopTypingResponse = require('./utils/responses/chats_stoptyping')

router.use(function logToSocket (req, res, next) {
  const response = {
    uri: url.parse(req.url).pathname,
    method: req.method,
    headers: req.headers,
    get_params: url.parse(req.url, true).query,
    post_params: req.body
  };

  // send all info that came from bot
  req.io.sockets.emit('stream', response)
  console.log(response)
  next()
})

router.post('/chats/create', function (req, res) {
  res.send(chatsCreateResponse)
})

router.post('/chats/:id/write', function (req, res) {
  res.send(chatsWriteResponse)
})

router.get('/chats/:id/typing', function (req, res) {
  res.send(chatsTypingResponse)
})

router.get('/chats/:id/stoptyping', function (req, res) {
  res.send(chatsStopTypingResponse)
})

module.exports = router

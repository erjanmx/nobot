const url = require('url');
const router = require('express').Router()
const chatsWriteResponse = require('./responses/chats_write')
const chatsCreateResponse = require('./responses/chats_create')
const chatsTypingResponse = require('./responses/chats_typing')
const chatsStopTypingResponse = require('./responses/chats_stoptyping')

router.use(function logSocket (req, res, next) {
  const response = {
    uri: url.parse(req.url).pathname,
    method: req.method,
    headers: req.headers,
    get_params: url.parse(req.url, true).query,
    post_params: req.body
  };

  // send all info that came from bot
  // socket.emit('stream', response);
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

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const server = require('http').Server(app);
const io = require('socket.io')(server);
require('./socket')(io)

const api = require('./api')

app.use(bodyParser.urlencoded())

app.use(express.static(__dirname + '/public/'))

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/public/index.html')
});

app.use('/api', function (req, res, next) {
    req.io = io;
    next();
}, api);

// app.use('/api', api)

server.listen(3000, () => console.log(`Server started. Point your bot endpoint to http://127.0.0.1:3000`))

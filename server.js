/*jshint esversion: 6 */

var fs = require('fs');
var url = require('url');
var axios = require('axios');
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const bot_host = 'http://127.0.0.1:8000?token=123';

var sock;
const stub_response = '{"success":true,"data":{"content":"stubbed_content","id":1,"type":"text/plain","status":0,"chat_id":1000,"name":"","image":""}}';

const server = http.createServer((request, response) => {
  let request_body = '';
  let path_name = url.parse(request.url).pathname;

  if (request.method == 'POST') {
    request.on('data', function(d) {
        request_body += d;
    });
  }

  if (path_name == '/') {
    path_name = '/index.html';
  }

  fs.readFile(__dirname + path_name, function(error, data) {
    if (error) {
      response.writeHead(200, {'Content-Type': 'application/json'});
      response.end(stub_response);

      let result = {
        'method': request.method,
        'headers': request.headers,
        'path_name': path_name,
        'query_params': url.parse(request.url, true).query,
        'request_body': request_body
      };

      sock.emit('stream', result);

    } else {
      response.writeHead(200);
      response.write(data, "utf8");
      response.end();
    }
  });
});


server.listen(port, hostname, () => {
  console.log(`Server started. Point your bot endpoint to http://${hostname}:${port}/`);
});

var io = require('socket.io')(server);

io.sockets.on('connection', function(socket) {
    console.log('connected');
    sock = socket;

    socket.on('bot', function (from, msg) {
      let params = {};

      switch (from) {
        case 'message/new':
          params = {
            'event': from,
            'data':{
              'id': 10000,
              "content": msg,
              "status": 0,
              "type":"text/plain",
              "sender_id": 1,
              "chat_id": 1000
            }
          }
          break;
        case 'user/follow':
          params = {
            'event': from,
            'data': {
              'id': 1,
              'name': 'nobot',
              'gender': 'M',
              'birthdate': ''
            },
          }
          break;
      }

      axios.post(bot_host, JSON.stringify(params), {
        headers: { 'Content-Type': 'text/plain' }
      })
      .then(function (response) {
        // console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    });

});


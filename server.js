/*jshint esversion: 6 */

var fs = require('fs');
var url = require('url');
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

var sock;
const stub_response = '{"success":true,"data":{"content":"stubbed_content","id":1,"type":"text/plain","chat_id":1,"name":"","image":""}}';

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
      response.writeHead(200, {"Content-Type": "text/html"});
      response.write(data, "utf8");
      response.end();
    }
  });
});


server.listen(port, hostname, () => {
  console.log(`Server started. Point your bot endpoint to http://${hostname}:${port}/`);
});

var io = require('socket.io')(server);

io.sockets.on('connection', function(socket){
    sock = socket;
});

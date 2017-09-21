const http = require('http');
var url = require('url');

const hostname = '127.0.0.1';
const port = 3000;

const stub_response = '{"success":true,"data":{"content":"stubbed_content","id":1,"type":"text/plain","chat_id":1,"name":"","image":""}}'


const server = http.createServer((request, response) => {
  let request_body = '';

  if (request.method == 'POST') {
    request.on('data', function(d) {
        request_body += d;
    });
  }

  request.on('end', function() {
      let result = {
        'method': request.method,
        'path_name': url.parse(request.url).pathname,
        'headers': request.headers,
        'query_params': url.parse(request.url, true).query,
        'request_body': request_body
      };

      console.log(result);
  });

  response.writeHead(200, {'Content-Type': 'application/json'});
  response.end(stub_response);
});

server.listen(port, hostname, () => {
  console.log(`Server started. Point your bot endpoint to http://${hostname}:${port}/`);
});

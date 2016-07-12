const http = require('http');
const url = require('url');

const port = 3000;

http.createServer((request, response) => {

  console.log('Incoming request to url: ', request.url);
  console.log('Method', request.method);

  var queryData = url.parse(request.url, true).query;
  console.log('query parameters: ', queryData);

  response.statusCode = 200;
  res.send('Hello from wsgen');
  response.end();

}).listen(port);

console.log('listening on port', port);


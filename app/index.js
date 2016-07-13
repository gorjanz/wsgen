// load express framework
const express = require('express');

// load configuration and setup
const config = require('../config.json');
const port = process.env.PORT || config.port;

// create an app via express
const app = express();

app.get('/', function (request, response) {
  console.log('Incoming request to url: ', request.url);

  const payload = "The website is under construction, and will be available shortly... :)";

  response.statusCode = 200;
  response.end(payload);
});

// setup route handling
app.get('/:id', function (request, response) {
  console.log('Incoming request to url: ', request.url);

  const payload = {"person": request.params.id};

  response.statusCode = 200;
  response.end(JSON.stringify(payload));
});

// launch a http server listening on the specified port
app.listen(port, function () {
  console.log('listening on port:', port);
});

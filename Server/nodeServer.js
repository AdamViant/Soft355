var express = require("express");
var app = express();
var http = require("http");
var url = require("url");
var functions = require("./functions");
var port = 9000;

var server = http.createServer(function(request, response)  {
  var args = url.parse(request.url, true).query;
  response.end(functions.testResponse(args.convStarter));
});

server.listen(port, function()  {
  console.log("Server listening on port " + port);
})

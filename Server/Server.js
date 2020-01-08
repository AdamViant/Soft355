var express = require("express");
var app = express();
var http = require("http");
var url = require("url");
var functions = require("./functions");
var port = 9000;

app.use(express.static("Site"));

//Finds all Categorys
app.get("/index", function (req, res) {
  res.send(functions.findCategorys());
})

app.listen(9000, function() {
  console.log("Listening on 9000...");
});

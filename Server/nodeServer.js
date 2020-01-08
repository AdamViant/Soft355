var express = require("express");
var app = express();
var http = require("http");
var url = require("url");
var functions = require("./functions");
var port = 9000;

app.use(express.static("resources"));

app.get("/category/:userID", function(request, response)  {
  functions.findcategory(request.params.id).then(function(category) {
    response.redirect(category.categoryName + category.status)
  })
})

app.listen(9000, function() {
  console.log("Listening on 9000...");
})

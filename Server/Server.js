var express = require("express");
var app = express();
var http = require("http");
var functions = require("./functions");
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://TimeMangement:time@cluster-l4srv.mongodb.net/timeManagementDB?retryWrites=true&w=majority";
var port = 9000;

app.use(express.static("Site"));

app.get("/", function(req,res) {
  res.status(200).sendfile("/", {root:"Site"});
});

//Finds all Categorys
app.get("/index", function(req, res) {
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("timeManagementDB");
    dbo.collection("categorys").find({}).toArray(function(err, result) {
      if (err) throw err;
      res.send(result);
      console.log(result);
      db.close();
    });
  });
});

app.listen(9000, function() {
  console.log("Listening on 9000...");
});

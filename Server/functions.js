var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://TimeMangement:time@cluster-l4srv.mongodb.net/timeManagementDB?retryWrites=true&w=majority";

function findCatagorys() {
  MongoClient.connect(url, {useNewUrlParser: true}, function(err, db) {
  if (err) throw err;
  var dbo = db.db("timeManagementDB");
  dbo.collection("categorys").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});
}

module.exports.findCatagorys = findCatagorys;

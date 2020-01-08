var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://TimeMangement:time@cluster-l4srv.mongodb.net/timeManagementDB?retryWrites=true&w=majority";

MongoClient.connect(url, {useNewUrlParser: true},function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myobj = {id: 1, userID: 1, categoryName: "Soft355", status: 0};
  dbo.collection("catagorys").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});

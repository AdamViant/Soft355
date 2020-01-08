var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://TimeMangement:time@cluster-l4srv.mongodb.net/timeManagementDB?retryWrites=true&w=majority";

function addCategory(id, uid, name, status) {
  MongoClient.connect(url, {useNewUrlParser: true},function(err, db) {
    if (err) throw err;
    var dbo = db.db("timeManagementDB");
    var myobj = {id: id, userID: uid, categoryName: name, status: status};
    dbo.collection("categorys").insertOne(myobj, function(err, res) {
      if (err) throw err;
      console.log("1 document inserted");
      db.close();
    });
  });
}
module.exports.addCategory = addCategory;

function addTask(id, catID, name, eHours, tHours, status)  {
  MongoClient.connect(url, {useNewUrlParser: true},function(err, db) {
    if (err) throw err;
    var dbo = db.db("timeManagementDB");
    var myobj = {id: id, categoryID: catId, taskName: name, estimatedHours: eHours, totalHours: tHours, status: status};
    dbo.collection("tasks").insertOne(myobj, function(err, res) {
      if (err) throw err;
      console.log("1 document inserted");
      db.close();
    });
  });
}
module.exports.addTask = addTask;

function findCategorys() {
  MongoClient.connect(url, {useNewUrlParser: true}, function(err, db) {
  if (err) throw err;
  var dbo = db.db("timeManagementDB");
  dbo.collection("categorys").find({}).toArray(function(err, result) {
    if (err) throw err;
    return(result);
    db.close();
  });
});
}
module.exports.findCategorys = findCategorys;

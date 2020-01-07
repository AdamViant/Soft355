var mongoose = require("mongoose");
mongoose.connect("mongodb+srv://TimeMangement:time@cluster-l4srv.mongodb.net/timeManagementDB?retryWrites=true&w=majority", {useNewUrlParser: true });
var category = require("./catagory");

var testData = new category ({id: 1, userID: 1, categoryName: "Soft355", status: 0})

testData.save(function(err) {
  console.log("Saved Test Data");
});

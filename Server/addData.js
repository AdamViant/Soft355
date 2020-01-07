var mongoose = require("mongoose");
mongoose.connect("mongodb+srv://TimeMangement:time@cluster-l4srv.mongodb.net/test?retryWrites=true&w=majority", {useNewUrlParser: true });
var category = require("./catagory");

var testData = new category ({id: 2, userID: 3, categoryName: "Soft355", status: 0})

testData.save(function(err) {
  console.log("Saved Test Data");
});

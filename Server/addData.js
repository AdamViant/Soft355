var schemas = require("./schemas");
var mongoose = require("mongoose");
mongoose.connect("mongodb+srv://Test:<password>@cluster-l4srv.mongodb.net/test?retryWrites=true&w=majority",
{ useNewUrlParser: true });

var testData = new Category ({id: 1, userID: 1, categoryName: Soft355, status: 0})

testData.save(function(err) {
  console.log("Saved Test Data");
});

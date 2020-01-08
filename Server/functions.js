var mongoose = require("mongoose");
mongoose.connect("mongodb+srv://TimeMangement:time@cluster-l4srv.mongodb.net/timeManagementDB?retryWrites=true&w=majority", {useNewUrlParser: true });
var category = require("./catagory");
var task = require("./task");

function testResponse() {
  if (convStarter == undefined) {
    return "Sever test response.";
  }
  return "Successfully recieved conversation starter : " + convStarter;
}

module.exports.testResponse = testResponse;

function findCatagory(id) {
  await schemas.catagory.find({"userId": id})
}

module.exports.findCatagory = findCatagory;

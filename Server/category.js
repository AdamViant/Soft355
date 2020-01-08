var mongoose = require("mongoose");
var schema = mongoose.Schema;

var categorySchemas = new schema ({id: Number, userID: Number, categoryName: String, status: Boolean});
module.exports = mongoose.model("category", categorySchemas);

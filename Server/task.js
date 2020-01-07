var mongoose = require("mongoose");
var schema = mongoose.Schema;

var taskSchemas = new schema ({id: Number, categoryID: Number, taskName: String, estimatedHours: Number, totalHours: Number, status: Boolean});
module.exports = mongoose.model("task", taskSchemas);

var mongoose = require("mongoose");

var Category = mongoose.model("Category", {id: Number, userID: Number, categoryName: String, status: Boolean});
module.exports.Category = Category;

var Task = mongoose.model("Task", {id: Number, categoryID: Number, taskName: String, estimatedHours: Number, totalHours: Number, status: Boolean});
module.exports.Task = Task;

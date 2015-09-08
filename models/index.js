var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/audition");


module.exports.User = require("./user");
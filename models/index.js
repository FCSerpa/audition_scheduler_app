var mongoose = require("mongoose");
mongoose.connect(process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || "mongodb://localhost/audition");


module.exports.User = require("./user");
module.exports.Event = require("./event");
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');

//new event schema
var EventSchema = new Schema({
	creator: [{type: String, required: true}],
	title: {type: String, required: true},
	company: {type: String, required: true},
	description: {type: String, required: true},
	date: {type: Date, required: true},
	time: {type: String, required: true},
	location: {type: String, required: true},
	slot: {type: Array}
});

//create a new event
EventSchema.statics.createNew = function(creator, title, company, description, date, time, location, cb){
	var _this = this;
	var event = { 
		creator: creator,
		title: title,
		company: company,
		description: description,
		date: date,
		time: time,
		location: location,
		slots: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}]
	};
	_this.create(event, cb);
};

var Event = mongoose.model('Event', EventSchema);

module.exports = Event;
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');

//new event schema
var EventSchema = new Schema({
	creator: {type: String, required: true},
	title: {type: String, required: true},
	company: {type: String, required: true},
	description: {type: String, required: true},
	date: {type: Date, required: true},
	time: {type: String, required: true},
	location: {type: String, required: true},
	slots: [slots]
});

//new slot schema
var SlotsSchema = new Schema({
	name: {type: String, required: true},
	email: {type: String, required: true},
	piece: {type: String, required: true},
})

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
		slots: [{number: 1, name: "", piece: ""}, {number: 2, name: "", piece: ""}, {number: 3, name: "", piece: ""}, {number: 4, name: "", piece: ""}, {number: 5, name: "", piece: ""}, {number: 6, name: "", piece: ""}, {number: 7, name: "", piece: ""}, {number: 8, name: "", piece: ""}, {number: 9, name: "", piece: ""}, {number: 10, name: "", piece: ""}]
	};
	_this.create(event, cb);
};

var Event = mongoose.model('Event', EventSchema);

module.exports = Event;
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');

//new user schema
var UserSchema = new Schema({
	email: {type: String, required: true},
	passwordDigest: {type: String, required: true},
	name: {type: String, required: true},
	phone: {type: String, required: true},
	createdOn: {type: Date, default: Date.now()}
});
var User = mongoose.model('User', userSchema);

//new event schema
var EventSchema = new Schema({
	creator: [{type: Schema.Types.ObjectId, ref: 'User'}],
	title: {type: String, required: true},
	company: {type: String, required: true},
	date: {type: Date, required: true},
	time: {type: String, required: true},
	location: {type: String, required: true},
	slot: {type: Array}
})

//create a new user, hash their password
UserSchema.statics.createSecure = function(email, password, name, phone, cb){
	var _this = this;
	bcrypt.genSalt(function(err, salt){
		bcrypt.hash(password, salt, function(err, hash){
			var user = {
				email: email,
				passwordDigest: hash,
				createdOn: Date.now(),
				phone: phone
			};
			this.create(user, cb);
		});
	});
};

//create a new event
EventSchema.statics.create = function(creator, title, company, date, time, location, cb){
	var _this = this;
	var 
}

//authenticate user at login
UserSchema.statics.authenticate = function(email, password, cb){
	this.findOne({email: email}, function(err, user){
		if (user === null){
			cb("Can/'t find user with that email", null);
		} else if (user.checkPassword(password)) {
			cb(null, user);
		} else {
			cb("password incorrect", user);
		}
	});
};

//compare password to hash
UserSchema.methods.checkPassword = function(password){
	return bcrypt.compareSync(password, this.passwordDigest);
};

var User = mongoose.model('User', UserSchema);

module.exports = User;
module.exports = Event;
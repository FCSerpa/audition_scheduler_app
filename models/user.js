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

//create a new user, hash their password
UserSchema.statics.createSecure = function(email, password, name, phone, cb){
	var _this = this;
	bcrypt.genSalt(function(err, salt){
		bcrypt.hash(password, salt, function (err, hash){
			var user = {
				email: email,
				passwordDigest: hash,
				name: name,
				phone: phone,
				createdOn: Date.now()
			};
			_this.create(user, cb);
		});
	});
};

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
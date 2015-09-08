var express = require('express');
var bodyParser = require('body-parser');
var db = require('./models');
var session = require('express-session');
var path = require('path');
var app = express();
var _ = require('underscore');

var views = path.join(process.cwd(), "views");

app.use(bodyParser.urlencoded({extended: true}));

//app.use(
//	session({
//		secret: 'something', //get a secret key for here!
//		resave: false,
//		saveUninitialized: true
//	})
//)

app.get("/newEvent", function(req, res){
	res.sendFile(path.join(views, "newEvent.html"));
});

app.get("/signIn", function(req, res){
	res.sendFile(path.join(views, "signIn.html"));
});

app.get("/signUp", function(req, res){
	res.sendFile(path.join(views, "signUp.html"));
});

//sign up a new user
app.post(["/users", "/signingUp"], function signup(req, res){
	var user = req.body.user;
	var email = user.email;
	var name = user.name;
	var phone = user.phone;
	var password = user.password;
	db.User.createSecure(email, password, name, phone, function(){
		res.send(name + " is registered!\n");
		console.log(user);
	});
});

//sign a user in
app.post(["/sessions", "/signingIn"], function login(req, res) {
	var user = req.body.user;
	var email = user.email;
	var password = user.password;
	console.log(user);
	db.User.authenticate(email, password, function(err, user) {
		res.send("Hello " + user.email);
	});
});


var listener = app.listen(3333, function(){
	console.log("Listening on port 3333")
});
var express = require('express');
var bodyParser = require('body-parser');
var db = require('./models');
var session = require('express-session');
var path = require('path');
var app = express();
var _ = require('underscore');
//var keygen = require('keygenerator');
//var cookieParser = require('cookie-parser');

//serve up js and css
app.use("/vendor", express.static("bower_components"));
app.use("/static", express.static("public"));

var views = path.join(process.cwd(), "views");

app.use(bodyParser.urlencoded({extended: true}));

app.use(
	session({
		secret: 'theoretician joe job incompliable cratered',
		resave: false,
		saveUninitialized: true
	})
)

// extending the `req` object to help manage sessions
app.use(function (req, res, next) {
  // login a user
  req.login = function (user) {
    req.session.userId = user._id;
  };
  // find the current user
  req.currentUser = function (cb) {
    db.User.
      findOne({ _id: req.session.userId },
      function (err, user) {
        req.user = user;
        cb(null, user);
      })
  };
  // logout the current user
  req.logout = function () {
    req.session.userId = null;
    req.user = null;
  }
  // call the next middleware in the stack
  next(); 
});

app.get("/newEvent", function(req, res){
	res.sendFile(path.join(views, "newEvent.html"));
});

app.get("/signIn", function(req, res){
	res.sendFile(path.join(views, "signIn.html"));
});

app.get("/signUp", function(req, res){
	res.sendFile(path.join(views, "signUp.html"));
});

app.get("/profile", function(req, res){
	res.sendFile(path.join(views, "profile.html"));
});

//show JSON of currently logged in user
app.get("/api/users/current", function(req, res){
	req.currentUser(function (err, user){
		res.json(user);
	});
});

app.get("/api/users", function(req, res){
	db.User.find({}, function(err, user){
		res.json(user);
	});
});

app.get("/api/events", function(req, res){
	db.Event.find({}, function(err, event){
		res.json(event);
	});
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
		if (err) {res.send(err)}
		else {
			req.login(user);
			console.log(req.session.userId);

			req.currentUser(function(err, user){
				console.log(user);
			})

			res.redirect("/profile");

		};
	});
});

//create a new event
app.post(["/events", "/newEventData"], function newEvent(req, res) {
	var event = req.body.event;
	var title = event.title;
	var company = event.company;
	var description = event.description;
	var date = event.date;
	var time = event.time;
	var location = event.location;
	req.currentUser(function(err, user){
		
		console.log(user);
		
		var creator = user.name;
		db.Event.createNew(creator, title, company, description, date, time, location, function(){
		
			res.send(title + " is created!\n");
		
			console.log(event);
		});	
	});
});


var listener = app.listen(3333, function(){
	console.log("Listening on port 3333")
});
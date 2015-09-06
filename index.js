var express = require('express');
var bodyParser = require('body-parser');
var db = require('./models');
var session = require('express-session');
var path = require('path');
var app = express();
var _ = require('underscore');

var views = path.join(process.cwd(), "views");

app.use(bodyParser.urlencoded({extended: true}));

app.use(
	session({
		secret: 'something', //get a secret key for here!
		resave: false,
		saveUninitialized: true
	})
;)
var express= require('express');

var createError = require('http-errors');
var Todo= require('./models/todoModel');
var ApiController= require('./controllers/apiController');
var HomeController= require('./controllers/homeController');
var express = require('express');
var parser= require('body-parser');



var app= express();
app.use(parser.json()); // to parse json body from request
app.use(parser.urlencoded({extended: true})); // to encode url
app.use('/assets',express.static(__dirname+'/public'));
app.set('view engine','ejs');



app.use('/',ApiController);
app.use('/',HomeController);

app.listen(8081);

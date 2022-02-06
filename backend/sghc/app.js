var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')

require('dotenv').config();

var indexRouter = require('./routes/index');
var activitiesRouter = require('./routes/activities');
var categoriesRouter = require('./routes/categories');

const mongoose = require('mongoose');

//const url = 'mongodb://localhost:27017/sghc';

const connect = mongoose.connect(process.env.mongodb_url);

connect.then((db) => {
    console.log("Connected correctly to server")
}, (err) => {console.log(err); });

var app = express();

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/activities', activitiesRouter);
app.use('/categories', categoriesRouter);

module.exports = app;

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var FileStore = require('session-file-store')(session);
var passport = require('passport');
var authenticated = require('./authenticate');
var cors = require('cors')

require('dotenv').config();

var indexRouter = require('./routes/index');
var activitiesRouter = require('./routes/activities');
var categoriesRouter = require('./routes/categories');
var usersRouter = require('./routes/users');
const uploadRouter = require('./routes/uploadRouter');

const mongoose = require('mongoose');

//const url = 'mongodb://localhost:27017/sghc';

const connect = mongoose.connect(process.env.mongodb_url);

connect.then((db) => {
    console.log("Connected correctly to server")
}, (err) => {console.log(err); });

var app = express();

// Secure traffic only
app.all('*', (req, res, next) => {
    if (req.secure) {
        return next();
    }
    else {
        res.redirect(307, 'https://' + req.hostname + ':' + app.get('secPort') + req.url);
    }
});

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//app.use(cookieParser('12354-09890-67876-45321'));

app.use(passport.initialize());

//app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use(express.static(path.join(__dirname, 'public')));

app.use('/activities', activitiesRouter);
app.use('/categories', categoriesRouter);
app.use('/imageUpload', uploadRouter);

module.exports = app;

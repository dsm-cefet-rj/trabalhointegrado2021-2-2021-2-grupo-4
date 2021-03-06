var express = require('express');
var router = express.Router();

const bodyParser = require('body-parser');
const User = require('../models/users');
const passport = require('passport');
var authenticate = require('../authenticate');
const cors = require('./cors');

router.use(bodyParser.json());

router.route('/')
.options(cors.corsWithOptions, (req, res) => { res.sendStatus(200) })
.get(cors.corsWithOptions, authenticate.verifyUser, async (req, res, next) => {
  console.log(req.user);
  try{
    const userBase = await User.find({});
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(userBase);
  }catch(err){
    err = {};
    res.statusCode = 404;
    res.json(err);
  }
})

router.post('/signup', cors.corsWithOptions, (req, res, next) => {
    User.register(new User({username: req.body.username}), req.body.password, 
    (err, user )=> {
        if(err){
            res.statusCode = 500;
            res.setHeader('Content-Type', 'application/json');
            res.json({err: err});

        } else {
           passport.authenticate('local')(req, res, () => {
               res.statusCode = 200;
               res.setHeader('Content-Type', 'application/json');
               res.json({success: true, status: 'Registration Successful!'});
           });
        }
    });
});

router.post('/login', cors.corsWithOptions, passport.authenticate('local'), (req, res) => {
    var token = authenticate.getToken({_id: req.user._id});
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json({ id: req.user._id, token: token })
});

router.get('/logout', cors.corsWithOptions, (req, res) => {
    if(req.session) {
        req.session.destroy();
        res.clearCookie('session-id');
        res.redirect('/');
    } else {
        var err = new Error('You are not logged in!');
        err.status = 403;
        next(err);
    }
});

module.exports = router;
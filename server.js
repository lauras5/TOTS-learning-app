// require dependencies
const express = require('express');
const path = require('path')
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes/master.routes');
const PORT = process.env.PORT || 3001;
// passport dependencies
const passportLocal = require('passport-local-mongoose');
const LocalStrategy = require('passport-local');
const session = require('express-session');
const passport = require('passport');

const app = express();
//public is starting point for static files
app.use(express.static(path.join(__dirname, 'public')))

// allows you to use nexted js objects together
app.use(bodyParser.urlencoded({ extended: true }));

// allows you to manipulate json
app.use(bodyParser.json());
// instance of express

// set up mongoose connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/timeoutDB';

mongoose.Promise = Promise;

mongoose.connect(MONGODB_URI);

// Serve up static assets (usually on heroku)
// app.use(require('./routes'));
app.use('/', routes);

// Passport Config
const User = require('./models/UserModel');
// use static authenticate method of model in LocalStrategy
passport.use(new LocalStrategy(User.authenticate()));
// use static serialize and deserialize of model for passport session support
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Seeds - comment out if you dont want to spam your db lol - To do: move to scripts folder
// const numberGameSeeds = require('./scripts/seeds').seedNumberGame()
// const numberGameSeeds = require('./scripts/seeds').seedColorGame()


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(session({
  secret: 'toddlerApp',
  // store: sessionStore,
  resave: true,
  saveUninitialized : true
}))

// passport requirements
app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => {
  res.sendFile(__dirname, './client/public/index.html')
});

// app.get('http://localhost:3001/api/users', (req, res) => {
//   res.send('hello')
// })
 
app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});


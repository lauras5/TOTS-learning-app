// require dependencies
const express = require('express');
const path = require('path')
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes/master.routes');
const PORT = process.env.PORT || 3001;

// passport dependencies
const passport = require('passport');
const LocalStrategy = require('passport-local');

// instance of express
const app = express();

app.get('/', (req, res) => {
  res.sendFile(__dirname, './client/public/index.html')
});

// allows you to use nexted js objects together
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(require('express-session') ({
  secret: 'Toddler App Session',
  resave: false,
  saveUninitialized: false
}))

// passport requirements
app.use(passport.initialize());
app.use(passport.session());

//public is starting point for static files
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', routes);

// Passport Config
const User = require('./models/UserModel');

// tells passport to authenticate user data
passport.use(new LocalStrategy(User.authenticate()));

// use static serialize and deserialize of model for passport session support
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

// set up mongoose connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/timeoutDB';

mongoose.Promise = Promise;

mongoose.connect(MONGODB_URI);

// Seeds - comment out if you dont want to spam your db lol - To do: move to scripts folder
const numberGameSeeds = require('./scripts/seeds').seedNumberGame()
const colorGameSeeds = require('./scripts/seeds').seedColorGame()
const cardGameSeeds = require('./scripts/seeds').seedCardGame()
const testUserSeeds = require('./scripts/seeds').seedTestUser()


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});


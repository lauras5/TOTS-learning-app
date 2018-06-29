// require dependencies
const express = require('express');
const path = require('path')
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes')

const app = express();
//public is starting point for static files
app.use(express.static(path.join(__dirname, 'public')))

<<<<<<< HEAD
// allows you to use nexted js objects together
app.use(bodyParser.urlencoded({ extended: true }));

// allows you to manipulate json
app.use(bodyParser.json());
// instance of express
=======
const PORT = process.env.PORT || 3001;
const app = express();
>>>>>>> parent of fc914b6... Merge branch 'master' into Parent-Page2


const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/timeoutDB';
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);
// Routes - list of all route files
// const numberGame = require('./routes/numbergame.routes');
// const cardGame = require('./routes/cardgame.routes');

<<<<<<< HEAD


=======
// allows you to use nexted js objects together
app.use(bodyParser.urlencoded({ extended: true }));

// allows you to manipulate json
app.use(bodyParser.json());
>>>>>>> parent of fc914b6... Merge branch 'master' into Parent-Page2
// // use number game routes
// app.use('/', numberGame);
// Serve up static assets (usually on heroku)
// app.use(require('./routes'));
<<<<<<< HEAD
app.use('/', routes);
=======
app.use(routes);
>>>>>>> parent of fc914b6... Merge branch 'master' into Parent-Page2


// Seeds - comment out if you dont want to spam your db lol - To do: move to scripts folder
// const numberGameSeeds = require('./scripts/seeds').seedNumberGame()


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


app.get('/', (req, res) => {
  res.sendFile(__dirname, './client/public/index.html')
});

// app.get('http://localhost:3001/api/users', (req, res) => {
//   res.send('hello')
// })
 
app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});


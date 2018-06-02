// require dependencies
const path = require('path')
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const db = require('./server/models');

const app = express();

const PORT = process.env.PORT || 3000;



// parse application/s-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const dirPath = __dirname + '\\client\\public'
app.set('public', dirPath);
// app.set('public', path.join(__dirname, '\client\public'))
console.log(dirPath)
app.set('view engine', 'jsx');

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/projectDB';

mongoose.Promise = Promise;

mongoose.connect(MONGODB_URI);

app.get('/api/hello', function (req, res) {
  res.send({express:'Hello From Express'})
});
 
app.listen(PORT, (err) => {
  if (err) throw err;
  console.log('Group Project 3 listening on Port ' + PORT)
});


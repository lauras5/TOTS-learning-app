var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ColorGameSchema = new Schema({
  index: Number,
  name: String,
  image: String
});

var ColorGame = mongoose.model('ColorGame', ColorGameSchema);

module.exports = ColorGame;
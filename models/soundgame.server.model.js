var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SoundGameSchema = new Schema({
  index: Number,
  name: String,
  image: String
});

const SoundGame = mongoose.model('SoundGame', SoundGameSchema);

module.exports = SoundGame;
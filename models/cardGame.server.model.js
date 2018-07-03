var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const CardGameSchema = new Schema ({
    name : String,
    image : String,
    sound : String
})

const CardGame = mongoose.model('CardGame', CardGameSchema);

module.exports = CardGame;
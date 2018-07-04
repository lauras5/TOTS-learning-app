var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ShapesSchema = new Schema ({
    index : {
        type: Number,
        required: true
    },
    name : {
        type: String,
        required: true
    },
    image : {
        type: String,
        required: true
    }
});

var Shapes = mongoose.model('Shapes', ShapesSchema);

module.exports = Shapes;
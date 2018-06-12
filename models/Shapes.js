var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ShapesSchema = new Schema ({
    shape : {
        type: String,
        required: true
    },
    color : {
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
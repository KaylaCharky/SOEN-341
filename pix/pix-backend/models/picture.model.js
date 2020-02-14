const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create user schema and model
const PictureSchema = new Schema({
    url: {
        type: String,
        required: [true, 'picture url field is required'],
        unique: true,
        trim: true,
    },
});

const Picture = mongoose.model('Picture', PictureSchema);

module.exports = Picture;
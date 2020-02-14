const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create user schema and model
const UserSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name field is required'],
        unique: true,
        trim: true,
        minlength: 3
    },
    displayName: {
        type: String,
        required: [true, 'please enter user name, it is required']
    }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
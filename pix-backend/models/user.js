const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create user schema and model
const UserSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name field is required']
    },
    displayName: {
        type: String,
        required: [true, 'please enter user name, it is required']
    }
});

const User = mongoose.model('user', UserSchema);

module.exports = User;
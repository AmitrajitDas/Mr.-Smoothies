const mongoose = require('mongoose');
const { isEmail } = require('validator');

const userSchema = new mongoose.Schema({
    email: {
        type: 'string',
        required: [true, 'Please enter an email'],
        unique: true,
        lowercase: true,
        validate: [isEmail, 'Please enter a valid email'] 
    },

    password: {
        type: 'string',
        required: [true, 'Please enter an password'],
        minlength: [6, 'Minimum Password length is 6 characters']
    },
});

const User = mongoose.model('user', userSchema);

module.exports = User;
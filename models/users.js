const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const user = new Schema({
    //Add validations to the User model

    //username is required, must be in lowercase, match only numbers and alphabetical characters.
    username: { type: String, lowercase: true, required: [true, "can't be blank"], match: [/^[a-zA-Z0-9]+$/, 'is invalid'], index: true },
    //email is also required, must be in lowercase and match email pattern.
    email: { type: String, lowercase: true, required: [true, "can't be blank"], match: [/\S+@\S+\.\S+/, 'is invalid'], index: true },
})
const mongoose = require("mongoose");
const Schema = require("mongoose").Schema;

const userSchema =  new Schema({
    name: String,
    lastname: String,
    email: String,
});

const User = mongoose.model('User', userSchema);

module.exports = {
    userSchema,
    User,
};
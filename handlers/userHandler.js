const User = require('../models/users').User;


function createUser(name, lastname, email) {
    const user = new User({ name: name, lastname: lastname, email: email });
    return user.save();
}

module.exports = {
    createUser,

};
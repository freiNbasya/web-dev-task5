const User = require('../models/users').User;
const { createUser } = require('../handlers/userHandler');

async function  getAllController(req, res) {
    const users = await User.find();
    res.render('users', {list: users});
}

async function getUserByIdController(req, res) {
    const userId = req.params.id;
    try {
        const user = await User.findOne({ _id: userId });
        res.render('user-profile', { user: user});
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

function getUserFormController(req, res) {
    res.render('create-user');
}

function postUserController(req, res) {
    const name = req.body.name;
    const lastname = req.body.lastname;
    const email = req.body.email;
    createUser(name, lastname, email)
        .then(() => res.render('user-created'))
        .catch(() => res.send('student NOT SAVED'));
}


module.exports = {
    getAllController,
    getUserByIdController,
    getUserFormController,
    postUserController
};
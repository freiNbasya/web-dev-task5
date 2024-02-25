const User = require('../models/users').User;
const { createUser, updateUser, deleteUser } = require('../handlers/userHandler');


async function  getAllController(req, res) {
    const users = await User.find();
    res.render('users', {list: users});
}

async function updateUserFormController(req, res) {
    const userId = req.params.id;
    try {
        const user = await User.findOne({ _id: userId });
        res.render('update-user', { user: user });
    } catch (error) {
        console.error('Error fetching user for update:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function postUpdateUserController(req, res) {
    const userId = req.params.id;
    const name = req.body.name;
    const lastname = req.body.lastname;
    const email = req.body.email;
    try {
        await User.updateOne({ _id: userId }, { name: name, lastname: lastname, email: email });
        res.render('user-updated');
    } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
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

async function deleteUserController(req, res) {
    const userId = req.params.id;
    try {
        await User.deleteOne({ _id: userId });
        res.render('user-deleted');
    } catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}


module.exports = {
    getAllController,
    getUserByIdController,
    getUserFormController,
    postUserController,
    updateUserFormController,
    postUpdateUserController,
    deleteUserController
};
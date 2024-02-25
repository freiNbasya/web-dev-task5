const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('./mongooseConnections');
const PORT = require('./configs/port');
const routes = require('./routes');
/*
There is a visual interface that should help you out.
    - link: "/" - displays all of the users in the database (GET)
    - link: "/new" - displays form to add new user (GET)
    - link: "/deleteUser/:id" - delete user by id (we utilize POST method to get around HTTP forms limitations) (POST)
    - link: "/updateUser/:id" - displays form to update existing user (GET)
*/
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'pug');
app.set('views', 'views');

mongoose.set('strictQuery', false);

app.use('/', routes.userRoutes);


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
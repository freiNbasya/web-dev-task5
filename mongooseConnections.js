const mongoose = require('mongoose');

let dbString = 'mongodb+srv://ikondenko:B5B5QVnADo7d8xDY@cluster0.6tfxwlh.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(dbString);

const dbConnection = mongoose.connection;

dbConnection.on('error', () => console.error('MongoDB connection error:'));

dbConnection.once('open', () => console.log('Connected to MongoDB'));

module.exports = mongoose;
const mongoose = require('mongoose');
require('dotenv').config();
mongoose.set('strictQuery', false);

const mongoURI = process.env.mongoURI;
const connection = mongoose.connect(mongoURI)


module.exports = connection;

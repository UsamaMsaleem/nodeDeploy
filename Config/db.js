// const mongoose = require('mongoose');
const mongoose = require('mongoose')
const mongoURI = "mongodb+srv://test:test@cluster0-fklhl.mongodb.net/test?retryWrites=true&w=majority"

mongoose.connect(mongoURI);


module.exports = mongoose;
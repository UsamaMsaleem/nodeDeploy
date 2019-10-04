const mongoose = require('mongoose')
const Schema = mongoose.Schema;



const QuestionsSchema = new Schema({
    name: String,
    IsActive:String
})

const Questions = mongoose.model('Questions',QuestionsSchema)

module.exports= Questions;
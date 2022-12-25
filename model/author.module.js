const mongoose = require('mongoose')
require('dotenv').config()

mongoose.set('strictQuery', true)

const AuthorSchema = new mongoose.Schema({
    Name:{type:String,required:true},
    
})



const AuthorModel = mongoose.model('author',AuthorSchema)

module.exports = AuthorModel;
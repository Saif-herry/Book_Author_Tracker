const mongoose = require('mongoose')
require('dotenv').config()

const bookSchema = new mongoose.Schema({
    authorId:{type:String,required:true},
    bookName:{type:String,required:true},
    ISBN:{type:String,required:true}

})

const bookModel = mongoose.model('book',bookSchema)

module.exports = bookModel
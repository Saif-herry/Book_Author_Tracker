const express = require('express')

const bookModel = require('../model/book.module')

const bookRouter = express.Router()

bookRouter.get('/',async(req,res)=>{
    try{
        const book = await bookModel.find()
        res.status(200).send(book)
    }
    catch(err){
       res.status(500).send({message:err.message})
    }
})


bookRouter.get('/:id',async(req,res)=>{
    try{
        const book = await bookModel.find(req.params.id)
        res.status(200).send(book)
    }
    catch(err){
       res.status(500).send({message:err.message})
    }
})


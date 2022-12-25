const express = require('express')

const bookModel = require('../model/book.module')

const bookRouter = express.Router()

bookRouter.get('/',async(req,res)=>{
    try{
        const book = await bookModel.find().populate("authorId");
        res.status(200).send(book)
    }
    catch(err){
       res.status(500).send({message:err.message})
    }
})


bookRouter.get('/:id',async(req,res)=>{
    console.log(req.params.id)
    try{
        const book = await bookModel.find({_id:req.params.id}).populate('authorId')
        res.status(200).send(book)
    }
    catch(err){
       res.status(500).send({message:err.message})
    }
})

bookRouter.post('/',async(req,res)=>{
    try{
        const book = await bookModel.create(req.body)
        res.status(200).send(book)
    }
    catch(err){
       res.status(500).send({message:err.message})
    }
})

bookRouter.delete('/:id',async(req,res)=>{
    try{
        const book = await bookModel.findByIdAndDelete(req.params.id)
        res.status(200).send(book)

    }
    catch(err){
       res.status(500).send({message:err.message})
    }
})

bookRouter.patch('/:id',async(req,res)=>{
    try{
        const book = await bookModel.findByIdAndUpdate(req.params.id,req.body)
        res.status(200).send(book)
    }
    catch(err){
        res.status(500).send({message:err.message})
    }
})



module.exports = bookRouter



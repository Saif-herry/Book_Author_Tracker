const express = require('express')

const authorModel = require('../model/author.module')

const AuthorRouter = express.Router()

AuthorRouter.get('/',async(req,res)=>{
    try{
        const user = await authorModel.find()
        res.status(200).send(user)
    }
    catch(err){
       res.status(500).send({message:err.message})
    }
})

AuthorRouter.post('/',async(req,res)=>{
    try{
        const user = await authorModel.create(req.body)
        user.save();
        res.status(200).send(user)
    }
    catch(err){
      res.status(500).send({message:err.message})
    }
})

AuthorRouter.get('/:id',async(req,res)=>{
    try{
        const user = await authorModel.find(req.params.id)
        res.status(200).send(user)
    }
    catch(err){
        res.status(500).send({message:err.message})
    }
})

AuthorRouter.delete('/:id',async(req,res)=>{
    try{
        const user = await authorModel.findByIdAndDelete(req.params.id)
        res.status(200).send(user)
    }
    catch(err){
       res.status(500).send({message:err.message})
    }
})

AuthorRouter.patch('/:id',async(req,res)=>{
   try{
    const user = await authorModel.findByIdAndUpdate(req.params.id,req.body)
    user.save()
    res.status(200).send(user)
   }
   catch(err){
    res.status(500).send({message:err.message})
   }
})

module.exports = AuthorRouter
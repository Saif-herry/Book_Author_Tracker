const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()
app.use(express.json())
app.use(cors())

app.get('/',(req,res)=>{
    res.send('Welcome in Crud')
})

const bookRouter = require('./routes/book.routes')
const AuthorRouter = require('./routes/Author.routes')
const connection = require('./config')

app.use('/author',AuthorRouter)
app.use('/book',bookRouter)

const PORT = process.env.PORT || 8080

app.listen(PORT,async()=>{
    try{
         await connection
         console.log('db connected')
    }
    catch(err){
        console.log('check config',err)
    }
    console.log(`listening on port ${PORT}`)
})
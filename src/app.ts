const express = require('express')
const userRouter = require('./routes/userRouter')
const movieRouter = require('./routes/movieRouter')
const app = express()

app.use(express.urlencoded({extended: true}));
app.use(express.json())
 
app.use('/api/v1/user',userRouter)
app.use('/api/v1/movie',movieRouter)


module.exports =  app
import mongoose from 'mongoose'
import dotenv  from 'dotenv'

dotenv.config({path: './config.env'})
const {data: app} = require('./app')

const DB = process.env.DATABASE

mongoose.connect(DB, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log('DB connection successful!'))


const port = 4000
const server = app.listen(port, ()=> {
    console.log(`Listening to port ${port}`)
})
export = server
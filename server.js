const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config({path: './config.env'})
const app = require('./app')

const DB = process.env.DATABASE

mongoose.connect(DB, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log('DB connection successful!'))


const port = 4000
const server = app.listen(port, ()=> {
    console.log(`Listening to port ${port}`)
})
module.exports = server
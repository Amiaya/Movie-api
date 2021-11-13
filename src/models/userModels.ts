import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    topMovies: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Movie'
    }]
})
const User = mongoose.model('User', userSchema)


export = User
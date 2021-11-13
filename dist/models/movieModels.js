var mongoose = require('mongoose');
var movieSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    release_date: {
        type: String,
        required: true
    },
    rating_average: {
        type: String,
        required: true
    },
    overview: {
        type: String
    },
    User: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});
var Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;

var mongoose = require('mongoose');
var userSchema = new mongoose.Schema({
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
});
var User = mongoose.model('User', userSchema);
module.exports = User;

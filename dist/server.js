var mongoose = require('mongoose');
var dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
var app = require('./app');
var DB = process.env.DATABASE;
mongoose.connect(DB, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(function () { return console.log('DB connection successful!'); });
var port = 4000;
var server = app.listen(port, function () {
    console.log("Listening to port " + port);
});
module.exports = server;

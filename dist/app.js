var express = require('express');
var userRouter = require('./routes/userRouter');
var movieRouter = require('./routes/movieRouter');
var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api/v1/user', userRouter);
app.use('/api/v1/movie', movieRouter);
module.exports = app;

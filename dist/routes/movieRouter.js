var express = require('express');
var movieController = require('../controllers/movieController');
var router = express.Router();
router.route('/').get(movieController.createMovies);
router.route('/top').get(movieController.GetAllMovies);
module.exports = router;

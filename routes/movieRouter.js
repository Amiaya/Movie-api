const express = require('express')
const movieController = require('./../controllers/movieController')

const router = express.Router()
router.route('/').get(movieController.createMovies)
router.route('/top').get(movieController.GetAllMovies)

module.exports = router
const axios = require('axios')
const Movie = require('./../models/movieModels')
const User = require('./../models/userModels')

exports.createMovies = async(req, res) => {
    try{
        let result = await axios.get(`https://api.themoviedb.org/3/list/6?api_key=988e8fd474119535840d4aa4ac5720de&language=en-US`);
        let i = process.argv[2]
        if (i > result.data.items.length){
            return "Error i greater than length of movie"
        }
        const newMovie = new Movie({
            Name: result.data.items[i].original_title,
            release_date: result.data.items[i].release_date,
            rating_average: result.data.items[i].vote_average,
            overview: result.data.items[i].overview
        })
        res.status(200).json({
            status: "sucess",
            data: {
                movie: newMovie
            }
        })
    }catch(err){
        res.status(400).json({
          status: "fail",
            message: err  
        })
    }
}
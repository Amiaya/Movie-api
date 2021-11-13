const { default: axios } = require('axios')
const {models: Movies} = require('../models/movieModels')
// const User = require('../models/userModels')

exports.createMovies = async(req, res) => {
    try{
        let result = await axios.get(`https://api.themoviedb.org/3/list/6?api_key=988e8fd474119535840d4aa4ac5720de&language=en-US`);
        let i = process.argv[2]
        if (i > result.data.items.length){
            return "Error i greater than length of movie"
        }
        const newMovie = new Movies({
            Name: result.data.items[i].original_title,
            release_date: result.data.items[i].release_date,
            rating_average: result.data.items[i].vote_average,
            overview: result.data.items[i].overview
        })
        await newMovie.save()
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

exports.GetAllMovies = async (req,res) => {
    try{
        var movies =  await Movies.find()
        res.status(200).json({
            status: "sucess",
            data: {
                movies
            }
        })

    }catch(err){
        res.status(400).json({
          status: "fail",
            message: err  
        })
    }
}
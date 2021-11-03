const User = require('./../models/userModels')
const Movie = require('./../models/movieModels')
exports.createUser = async(req, res) => {
    try{
        const NewUser  = new User(req.body)
        res.status(200).json({
            status: "success",
            data: {
                User: NewUser
            }
        })
    }catch(err){
        res.status(400).json({
            status: "fail",
            message: err
        })
    }
}

exports.GetAllUser = async(req,res) => {
    try{
        const user = await User.find()
        res.status(200).json({
            status: "success",
            data: {
                User: user
            }
        })
    }catch(err){
        res.status(400).json({
            status: "fail",
            message: err
        })
    }
}


exports.UpdateUser = async(req,res)=> {
    
    try{
        const user = await User.findById(req.params.id)
        res.status(200).json({
            status: "success",
            data: {
                User: user
            }
        })
        
    }catch(err){
        res.status(400).json({
            status: "fail",
            message: err
        })
    }
}

exports.GetUser = async(req,res) =>{
    try{
        const user = await User.findById(req.params.id)
        const movie = await Movie.findOne({})
        user.topMovies.push(movie)
    
        res.status(200).json({
            status: "success",
            data: {
                User: user
            }
        })
    }catch(err){
        res.status(400).json({
            status: "fail",
            message: err
        })
    }
}

exports.DeleteUser = async (req,res) => {
    try{
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json({
            status: "success"
        })


    }catch(err){
        res.status(400).json({
            status: "fail",
            message: err
        })
    }
}
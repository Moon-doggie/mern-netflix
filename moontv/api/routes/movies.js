const router = require("express").Router()
const Movie = require("../models/Movie")
const verify = require("../verifyToken")

// Create new movie
// Method uses post because creating new.
router.post("/", verify, async (req, res) => {
    // only admin can do this.
    if (req.user.isAdmin) {
        const newMovie = new Movie(req.body)
        // Try save in database. 
        try{
            const saveMovie = await newMovie.save()
            res.status(201).json(saveMovie)

        }
        catch(err){
            res.status(500).json(err)
        }

    }
    else {
            res.status(403).json("Only an admin can perform this function!")       
    }
});


// Update movie
// Method uses put because updating.
router.put("/:id", verify, async (req, res) => {
    // only admin can do this.
    if (req.user.isAdmin) {
        
        try{
            // Take id, try to find id, set new data inside body. Set new to true for updated movie. 
            const updatedMovie = await Movie.findByIdAndUpdate(req.params.id, {$set: req.body},{new:true})
            res.status(200).json(updatedMovie)

        }
        catch(err){
            res.status(500).json(err)
        }

    }
    else {
            res.status(403).json("Only an admin can perform this function!")       
    }
});

// Delete movie
// Method uses delete because deleting.
router.delete("/:id", verify, async (req, res) => {
    // only admin can do this.
    if (req.user.isAdmin) {
        
        try{
            // Take id, try to find id and delete if found. 
            await Movie.findByIdAndDelete(req.params.id,)
            res.status(200).json("The movie has been deleted ")
        }
        catch(err){
            res.status(500).json(err)
        }

    }
    else {
            res.status(403).json("Only an admin can perform this function!")       
    }
});

// Get by id
// Method uses get because finding.
router.get("/find/:id", verify, async (req, res) => {
    // any user can do this so no need for if admin statemenet.
    try{
        // Take id, try to find id. 
        const movie = await Movie.findById(req.params.id,)
        res.status(200).json(movie)
    }
    catch(err){
        res.status(500).json(err)
    }   
});


// Get random movie or series
// Method uses get because finding.
router.get("/random", verify, async (req, res) => {
    // Query to display type i.e. movie or series if chosen by user
    const type = req.query.type;
    // movie variable to change.
    let movie;
    // all users can get movie.
    try{
        if(type === "series"){
            movie = await Movie.aggregate([
                // Find all series from movie model where isSeries is true.
                {$match: {isSeries:true} },
                // return a sample of 1 from all found above.
                {$sample: {size: 1}}
            ])
        } else {
            movie = await Movie.aggregate([
                // Find all movies from movie model where isSeries is false.
                {$match: {isSeries:false} },
                // return a sample of 1 from all found above.
                {$sample: {size: 1}}
            ])
        }
        res.status(200).json(movie)
    }
    catch(err){
        res.status(500).json(err)
    }
});

  
// Get All
// Method uses get because getting.
router.get("/", verify, async (req, res) => {
    // only admin can do this.
    if (req.user.isAdmin) {               
        try{
            // Find all movies/series
            const movies = await Movie.find()
            // Include .reverse to display most recently added first.
            res.status(200).json(movies.reverse())
        }
        catch(err){
            res.status(500).json(err)
        }
    }
    else {
            res.status(403).json("Only an admin can perform this function!")       
    }
});
    
module.exports = router;
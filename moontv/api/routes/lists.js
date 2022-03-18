const router = require("express").Router()
const { restart } = require("nodemon");
const { listeners } = require("../models/List");
const List = require("../models/List")
const verify = require("../verifyToken")



// Create new list
// Method uses post because creating new.
router.post("/", verify, async (req, res) => {
    // only admin can do this.
    if (req.user.isAdmin) {
        const newList = new List(req.body)
        // Try save in database. 
        try{
            const savedList = await newList.save()
            res.status(201).json(savedList)

        }
        catch(err){
            res.status(500).json(err)
        }

    }
    else {
            res.status(403).json("Only an admin can perform this function!")       
    }
});

// Delete

// Method uses delete because deleting.
router.delete("/:id", verify, async (req, res) => {
    // only admin can do this.
    if (req.user.isAdmin) {
        try{
           await List.findByIdAndDelete(req.params.id)
            res.status(201).json("The list has been deleted")
        }
        catch(err){
            res.status(500).json(err)
        }

    }
    else {
            res.status(403).json("Only an admin can perform this function!")       
    }
});


// Get lists
// Method uses get because getting.
router.get("/", verify, async (req, res) => {
    const typeQuery= req.query.type
    const genreQuery = req.query.genre
    let list = []

    try{
        if(typeQuery){
            // If genre is also selected ,return type and genre.
            if(genreQuery){
                list = await List.aggregate([
                    // Return 10 of the type and genre from below
                    {$sample: {size:10}},
                    // Load type and genre
                    {$match: {type: typeQuery, genre: genreQuery}}
                ])
            }
            // If no genre is selected, return only type.
            else{
                list = await List.aggregate([
                    // Return 10 of the type from below
                    {$sample: {size:10}},
                    // Load only type
                    {$match: {type: typeQuery}}
                ])
            }
        }
        else{
            // if no query, return random lists
            list = await List.aggregate([{$sample:{size:10}}])
        }
        res.status(200).json(list)

    }catch(err){
        res.status(500).json(err)
    }    
})
    
module.exports = router;
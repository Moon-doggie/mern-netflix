const router = require("express").Router()
const User = require("../models/User")
const CryptoJS = require("crypto-js");
const verify = require("../verifyToken")

// Update
// Method uses put because updating.
router.put("/:id", verify, async (req, res) => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
        if (req.body.password) {
            req.body.password = CryptoJS.AES.encrypt(
            req.body.password,
            process.env.SECRET_KEY
            ).toString()
        }

        try {
            // After setting new user, set new to true. 
            // Updates first and then sets new user to true.
            const updatedUser = await User.findByIdAndUpdate(req.params.id, {$set: req.body,},{ new: true })
            res.status(200).json(updatedUser)
            } 
            catch (err) {
                res.status(500).json(err)
            }
    } 
    else {
            res.status(403).json("You can only update your own account!")       
    }
});
  


// Delete
// Method uses delete because deleting.
router.delete("/:id", verify, async (req, res) => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
        try {            
            await User.findByIdAndDelete(req.params.id)
            res.status(200).json("User has been deleted...")
            } 
            // If error, then return error.
            catch (err) {
                res.status(500).json(err)
            }
    } 
    else {
        // If user is not usser or admin, then display message.
            res.status(403).json("You can only delete your own account!")       
    }
});

// GET
// Method uses get because to search.
router.get("/find/:id", async (req, res) => {    
    try {            
        const user = await User.findById(req.params.id)
        // Don't want to see the password, so include below.
        const {password, ...info} = user._doc 
        res.status(200).json(info)
    } 
    // If error, then return error.
    catch (err) {
        res.status(500).json(err)
    }     
});

// GET ALL
// Method uses delete because deleting.
router.get("/", verify, async (req, res) => {
    const query = req.query.new
    // See all users only if admmin.
    if (req.user.isAdmin) {
        try {         
            // If there is a query, find only the 10 most recent users. If there is no query, find all users.   
            const users = query ? await User.find().sort({_id:-1}).limit(10) : await User.find()
            await User.findByIdAndDelete(req.params.id)
            res.status(200).json(users)
            } 
            // If error, then return error.
            catch (err) {
                res.status(500).json(err)
            }
    } 
    else {
        // If user is not usser or admin, then display message.
            res.status(403).json("You are not allowed to see all users!")       
    }
});

// GET USER STATS

router.get("/stats", async (req, res) => {
    // Fetch user stats in last year
    // New data for today.
    const today = new Date()
    //  last year is today - 1 year from today.
    const lastYear = today.setFullYear(today.setFullYear() - 1)

    // Array to include months 
    // !!!!!!!!!(don't need this, can delete in future)!!!!!!!!!!!!!!!!
    // const monthsArray = [
    //     "January",
    //     "February",
    //     "March",
    //     "April",
    //     "May",
    //     "June",
    //     "July",
    //     "August",
    //     "September",
    //     "October", 
    //     "November",
    //     "December"
    // ]

    // Total users per month.
    try {
        const data = await User.aggregate([
          {
            $project: {
                // Can replace month with others i.e. year.
              month: { $month: "$createdAt" },
            },
          },
          {
            $group: {
              _id: "$month",
              total: { $sum: 1 },
            },
          },
        ])
        res.status(200).json(data)
      } catch (err) {
        res.status(500).json(err);
      }
    })
    
    module.exports = router;
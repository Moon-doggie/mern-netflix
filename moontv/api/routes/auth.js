// router
const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
// import json web token for sending information
const jwt = require("jsonwebtoken");


// Register

// user will make request to url, and after creating user will get a response
router.post("/register", async (req, res) => {  
    const newUser = new User({
        // request body for user credentials
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(
        req.body.password,
        process.env.SECRET_KEY
        ).toString(),
    });

    // await information  
    try {
        const user = await newUser.save();
        res.status(201).json(user);
        } catch (err) {
        res.status(500).json(err);
        }
    });

//LOGIN
router.post("/login", async (req, res) => {
    try {
      const user = await User.findOne({ email: req.body.email });
      !user && res.status(401).json("Wrong password or username!");
  
      const bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
      const originalPassword = bytes.toString(CryptoJS.enc.Utf8);
  
      originalPassword !== req.body.password &&
        res.status(401).json("Wrong password or username!");
          
        // Create JWT before snding information. This will hide the information below in the token.
        const accessToken = jwt.sign(
        { id: user._id, isAdmin: user.isAdmin },
        process.env.SECRET_KEY,
        // After 5 days, the token will expire.
        { expiresIn: "5d" }
        );

        const { password, ...info } = user._doc;     
        // contains all information and access token.     
        res.status(200).json({ ...info, accessToken });        
        } catch (err) {
        res.status(500).json(err);
        }
    });
  
module.exports = router;
// import application 
const express = require("express");
// create application
const app = express();
// mongodb connection
const mongoose = require("mongoose")
// dotenv to hide username and password of mongodb
const dotenv = require("dotenv")
// router
const authRoute = require("./routes/auth")
const userRoute = require("./routes/users")

// .env config
dotenv.config()

// connect to the moongoose database
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCrateIndex is deprecated
    // useCreateIndex: true,
})
// display message if succussful
.then(()=>console.log("DB connection succussful!"))
// catch and display error if not
.catch((err)=> console.log(err))

app.use(express.json())

app.use("/api/auth", authRoute)
app.use("/api/users", userRoute)


// run application using port 8800.
app.listen(8800, () => {
    // log connection
    console.log("backend server is running!")
}); 
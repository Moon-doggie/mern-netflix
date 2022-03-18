// import application 
const express = require("express");
// create application
const app = express();
// mongodb connection
const mongoose = require("mongoose")
// dotenv to hide username and password of mongodb
const dotenv = require("dotenv")
// routers
const authRoute = require("./routes/auth")
const userRoute = require("./routes/users")
const movieRoute = require("./routes/movies")
const listRoute = require("./routes/lists")

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

// auth route
app.use("/api/auth", authRoute)
// users route
app.use("/api/users", userRoute)
// movie route
app.use("/api/movies", movieRoute)
// list route
app.use("/api/lists", listRoute)


// run application using port 8800.
app.listen(8800, () => {
    // log connection
    console.log("backend server is running!")
}); 
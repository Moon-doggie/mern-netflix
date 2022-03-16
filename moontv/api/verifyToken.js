const jwt = require("jsonwebtoken")

function verify(req, res, next){
    const authHeader = req.headers.token

    if(authHeader){
        // If have token, split and take second
        const token = authHeader.split(" ")[1]

        jwt.verify(token, process.env.SECRET_KEY,(err, user) => {
            if(err) res.status(403).json("Token is not valid!")
            req.user = user
            next()
        })

    } else {
        // If no token, respond with error
        return res.status(401).json("You are not authenticated")
    }

}

module.exports = verify
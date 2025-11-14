const jwt = require("jsonwebtoken");
const JWT = process.env.JWT;

const verifyusers = (req,res,next)=>{

    const token = req.cookies.token;

    if(!token)
    {
        res.status(404).json("failed")
    }



    const decode =  jwt.verify(token,JWT)
    next();
}

module.exports = verifyusers;
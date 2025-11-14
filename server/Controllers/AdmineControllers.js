const admineModels = require("../Models/AdmineModels");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const JWT = process.env.JWT;

const register = async(req,res)=>{

    const{name,email,password} = req.body;

    let user = await admineModels.findOne({email:email});

    if(user) return res.status(404).json("fail");

    const hashpassword = await bcrypt.hash(password,10);

    await admineModels.create({name,email,password:hashpassword});

    res.status(201).json("success");
}


const login = async(req,res)=>{
    
    const{email,password} = req.body;

    if(email==="ks9836185@gmail.com" && password==="987654321")
    {
        res.status(201).json("success")
    }
}


module.exports = {register,login};

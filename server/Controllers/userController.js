const userModel = require("../Models/userModels");
const bcrypt = require("bcryptjs");
const JWT = process.env.JWT;
const jwt = require("jsonwebtoken");

const register = async(req,res)=>{
    
    const{name,email,password} = req.body;

   let user = await userModel.findOne({email:email});

    if(user) return res.status(404).json("failed");

    const hashpassword = await bcrypt.hash(password,10);

    await userModel.create({name,email,password:hashpassword});

    res.status(201).json("success")
    
}

const login = async(req,res)=>{
    
    const{email,password} = req.body;

    let user = await userModel.findOne({email:email});

    if(!user) return res.status(404).json("failed");

    const ismatch = await bcrypt.compare(password,user.password);

    if(!ismatch) return res.json("failed");

    const token = jwt.sign({_id:user._id},JWT);

    res.status(201).cookie(token,"token",{
        httpOnly:true,
        secure:true,
        maxAge:60*60*1000
    }).json("success")
}


const viewusers = async(req,res)=>{

    const view = await userModel.find();
    res.status(201).json({
        success:true,
        view
    })
}

module.exports = {register,login,viewusers}
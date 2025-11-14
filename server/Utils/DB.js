const mongoose = require("mongoose");
const MONGODB = process.env.MONGODB;

const connectDB = ()=>{
    mongoose.connect(`${MONGODB}`).then(()=>{
        console.log("Database Connected Successfully")
    }).catch(()=>{
        console.log("Connection failed")
    })
}

module.exports = connectDB;
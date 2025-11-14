const mongoose = require("mongoose");

const admineSchema = mongoose.Schema({

    name:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true
    },


    password:{
        type:String,
        required:true
    },
});

const adminemodel =  mongoose.model("adminedata",admineSchema);
module.exports = adminemodel
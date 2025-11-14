const mongoose = require("mongoose");

const userSchema = mongoose.Schema({

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

const userModles = mongoose.model("userdata",userSchema);
module.exports = userModles;
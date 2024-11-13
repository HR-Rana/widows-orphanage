const { Schema, default: mongoose } = require("mongoose");



const model = new Schema({
   
    email:{
        type:String,
        reauired:[true, "Please type your email address"],
        unique:true,
        lowercase:true
       
    },
    password:{
        type:String,
        required:[true, "Please enter your password"],
        minLength:[4, " You have to enter minimum 4 characters"],
        maxLength:[20, "Password not should be more than 20 characters"] 
    }
})


const adminModel = mongoose.model("Admin", model);

module.exports = adminModel;
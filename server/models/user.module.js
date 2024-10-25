const { Schema } = require("mongoose");



const model = new Schema({
    email:{
        type:string,
        reauired:[true, "Please type your email address"]
    },
    password:{
        type:string,
        required:[true, "Please enter your password"],
        minLength:[4, " You have to enter minimum 4 characters"],
        maxLength:[20, "Password not should be more than 20 characters"] 
    }
})


const adminModel = mongoose.model("Admin", model);

module.exports = adminModel;
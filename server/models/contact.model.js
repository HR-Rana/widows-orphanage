const { Schema } = require("mongoose");



const model = new Schema({
    address:{
        type:String,
        required:[true, "Please enter your address"]
    },
    phone:{
        type:String,
        required:[true, "Please enter your phone number"]
    },
    email:{
        type:String,
        required:[true, "Please enter your email address"]
    }
     
})


const contactModel = mongoose.model("Contact", model)
module.exports = contactModel;
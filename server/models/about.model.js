const { Schema, default: mongoose } = require("mongoose");


const model = new Schema({
    text:{
        type:String,
        required:[true, "please enter the about description"],
        minLength:[30, "Please enter at least 30 characters"],
        maxLength:[400, "Please enter a maximum of 400 characters"]
    },
    image:{
        type:String,
        required:[true, "please enter the about image"],
        match:[/\.(jpg|jpeg|png|gif)$/i, "Please upload an image file (jpg,jpeg, png, gif)"]
    }
})



const aboutModel = mongoose.model('About', model)
module.exports = aboutModel;

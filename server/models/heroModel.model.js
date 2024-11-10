const { default: mongoose } = require("mongoose");
const { Schema } = require("mongoose");



const model = new Schema({
    title:{
        type:String,
        required:[true, "please enter the title "],
        minLength:[15, "title must be at least 15 characters"],
        maxLength:[80, "title not should be more than 80 characters"]
    },
    subTitle:{
        type:String,
        required:[true, "please enter the subtitle "],
        minLength:[15, "subtitle must be at least 20 characters"],
        maxLength:[100, "subtitle not should be more than 100 characters"]
    },
    image:{
        type:String,
        required:[true, "please enter the image "],
        match:[/\.(jpg|jpeg|png|gif)$/i, "image must be in jpg,jpeg, png, or gif format"]
    },
    button:{
        type:String,
        required:[true, "please enter the button name"],
        minLength:[3, "button name must be at least 3 characters"],
        maxLength:[10, "button name not should be more than 10 characters"],
        buttonUrl:String,
    }
})



const heroModel = mongoose.model("Hero", model);
module.exports = heroModel;
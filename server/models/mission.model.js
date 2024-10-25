const { Schema } = require("mongoose");



const model = new Schema({
    image:{
        type:String,
        required:[true, "please enter the about image"],
        unique:[true, "Image already exists"]
    },
    mission:{
        type:String,
        required:[true, "please enter the mission statement"],
        minLength:[30, "Please enter at least 30 characters"],
        maxLength:[400, "Please enter a maximum of 400 characters"]
    },
    vision:{
        type:String,
        required:[true, "please enter the vision statement"],
        minLength:[30, "Please enter at least 30 characters"],
        maxLength:[400, "Please enter a maximum of 400 characters"]
    }
})


const missionModel = mongoose.model("mission", model);
module.exports = missionModel;

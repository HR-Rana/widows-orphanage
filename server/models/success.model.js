import mongoose, { Schema } from "mongoose";


const model = new Schema({
    widowsTitle:{
        type:String,
        required:[true, "please enter the widows title"],
    },
    orphanageTitle:{
        type:String,
        required:[true, "please enter the orphanage title"],
    },  

})





const values= {
    type:{
        type:String,
        required:[true, "please enter the type"],
    },
    name:{
        type:String,
        required:[true, "please enter the title"],
    },
    value:{
        type:Number,
        required:[true, "please enter the value"],
    }
}


const successValue = mongoose.model('value', values)
const successTitle = mongoose.model('title', model);
module.exports = { successValue, successTitle };

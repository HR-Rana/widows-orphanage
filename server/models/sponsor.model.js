const { Schema } = require("mongoose");



const model = new Schema({
    image:{
        type:String,
        required:[true, "please enter the sponsor image"],
        unique:[true, "Image already exists"]
    },
    company:{
        type:String,
        required:[true, "please enter the sponsor name"],
        unique:[true, "Company already exists"]
    }
})


const sponsorModel = mongoose.model('sponsor', model)
module.exports = sponsorModel;
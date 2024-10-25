const { Schema, mongo } = require("mongoose");



const model = new Schema({
    type:{
        type:String,
        required:[true, "please enter the type"]
    },
    url:{
        type:String,
        required:[true, "Couldn't upload"]
    }
      
})


const gellaryModel = mongoose.model("galalry", model)

module.exports = gellaryModel;
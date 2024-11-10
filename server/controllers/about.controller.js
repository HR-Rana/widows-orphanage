const aboutModel = require("../models/about.model");




 const postAboutData = async(req, res) => {
      const text = req.body.text;
      const image = req.body.file;
      console.log("it's working...")
      res.send("about post is working....")
 };

 const getAboutData = async(req, res) => {
    res.send("about is working ")
    try {
         const result = await aboutModel.find();
         res.status(200).json(result);
    } catch (error) {
      res.send(error.code).json(error.message);
    }

 };

 const updateAboutData = async(req, res) => {
   const id = req.params.id;

  res.send("about update is working")
 };

 const deleteAboutData = async(req, res) => {
   const id = req.params.id;
   res.send("about delete is working")
 };


 module.exports = { postAboutData, getAboutData, updateAboutData, deleteAboutData };
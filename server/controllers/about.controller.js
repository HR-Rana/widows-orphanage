const aboutModel = require("../models/about.model");




 const postAboutData = async(req, res) => {
      const text = req.body.text;
      const image = req.body.file;
 };

 const getAboutData = async(req, res) => {
    
    try {
         const result = await aboutModel.find();
         res.status(200).json(result);
    } catch (error) {
      res.send(error.code).json(error.message);
    }

 };

 const updateAboutData = async(req, res) => {
   const id = req.params.id;


 };

 const deleteAboutData = async(req, res) => {
   const id = req.params.id;
 };


 module.exports = { postAboutData, getAboutData, updateAboutData, deleteAboutData };
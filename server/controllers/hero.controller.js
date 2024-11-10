const heroModel = require("../models/heroModel.model");


 const getHerodata = (req, res)=>{
    res.send("this is working perfectly");
    console.log("it's working")
}




 const postHerodata = async (req, res)=>{
    const title = req.body.title;
    const subTitle = req.body.subTitle;
    const image = req.body.image;
    const button = req.body.button;
   console.log(title, subTitle, image, button);

   try {
      const postHero = new heroModel({
          title,
          subTitle,
          image,
          button
      })

      await postHero.save();
      res.status(200).json(postHero);
      console.log("Hero data has been saved to the database");
   } catch (error) {
      res.send(500).json(error.message)
   }






 };

 const updateHerodata = (req, res)=>{
    res.send("hero is working")
    console.log("it's working")
 };

 const deleteHerodata = (req, res)=>{
    res.send("hero is working")
    console.log("it's working")
 };










module.exports = { getHerodata, updateHerodata, deleteHerodata, postHerodata}
const adminModel = require("../models/user.module");


const getAdmin = (req, res) =>{
    const email = req.body.email;
    const password = req.body.password;

    res.send(email, password);
    console.log(email, password);
}


const createAdmin = async (req, res) =>{
    res.send("admin created");
    console.log(req);


    try {
        const User = await adminModel.create({
          
        })
    } catch (error) {
        
    }


}


const updateAdmin = (req, res) =>{
    res.send("admin updated");
}


module.exports = {getAdmin, createAdmin, updateAdmin}
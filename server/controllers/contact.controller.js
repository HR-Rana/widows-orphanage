const contactModel = require("../models/contact.model");



const getContact = async(req, res) =>{
    try {
        const contact = await contactModel.findById(req.params.id);
        res.status(200).json(contact);
    } catch (error) {
        
    }
}



const postContact = async(req, res) =>{
    const address = req.body.address;
    const phone = req.body.phone;
    const email = req.body.email;



    try {
        const contact = await contactModel.create({})
    } catch (error) {
        
    }



}
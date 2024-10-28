

const getAdmin = (req, res) =>{
    const email = req.body.email;
    const password = req.body.password;

    res.send(email, password)
}


const createAdmin = (req, res) =>{
    res.send("admin created");
}


const updateAdmin = (req, res) =>{
    res.send("admin updated");
}


module.exports = {getAdmin, createAdmin, updateAdmin}
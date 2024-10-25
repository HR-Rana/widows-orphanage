
const mongoose = require('mongoose');
const dbUlr = process.env.DB_CONNECTION;



const DB_connection = async (options = {}) =>{
    try {

        await mongoose.connect("mongodb+srv://widows_orphanage:12345@cluster1.lqd6sol.mongodb.net/", options);
        console.log("Database connected successfully");

    } catch (error) {
        console.log(error.message)
    }
}



module.exports = DB_connection;
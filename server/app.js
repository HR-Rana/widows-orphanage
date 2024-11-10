const express = require('express');
const app = express();
const cors = require('cors');
const router = require('./apis/adminRouter');



app.use(cors())
app.use(express.json());


app.use('', router)




app.use("*", (req, res) => {
    res.status(404).json({message: "Page not found"});
})


app.use("/", (req, res)=>{
    res.send("hello world! this is expressjs homepage");
})








module.exports = app;
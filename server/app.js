const express = require('express');
const app = express();
const cors = require('cors');
const router = require('./apis/adminRouter');



app.use(cors())
app.use(express.json());


app.use('/admin', router)





app.use("/", (req, res)=>{
    res.send("hello world! this is expressjs homepage");
})








module.exports = app;
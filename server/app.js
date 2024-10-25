const express = require('express');
const app = express();
const cors = require('cors');
const router = require('./router/adminRouter');


app.use(cors())

app.use('/admin', router)




app.use("/", (req, res)=>{
    res.send("hello world! this is expressjs homepage");
})








module.exports = app;
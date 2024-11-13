const express = require('express');
const { createAdmin, getAdmin } = require("../controllers/admin.controller");
const adminAccess = express.Router();




adminAccess.post("/admin", createAdmin);

adminAccess.get("/get-admin", getAdmin)





module.exports = adminAccess;
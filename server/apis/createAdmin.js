const { createAdmin, getAdmin } = require("../controllers/admin.controller");
const router = require("./adminRouter");



router.post("/admin", createAdmin);

router.get("/get-admin", getAdmin)


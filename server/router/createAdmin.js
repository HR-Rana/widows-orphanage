const { createAdmin, getAdmin } = require("../controllers/admin.controller");
const router = require("./adminRouter");



router.post("/admin", createAdmin);

router.get("/admin", getAdmin)


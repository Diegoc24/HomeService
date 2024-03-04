const { Router } = require("express");
const adminRoutes = require("./adminRoute");
const clientRouter = require("./clientRoute");


const router = Router();
//route admin
router.use("/admin", adminRoutes)

//route client
router.use("/client", clientRouter)


module.exports = router
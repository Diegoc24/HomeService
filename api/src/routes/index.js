const { Router } = require("express");
const adminRoutes = require("./adminRoute");
const clientRouter = require("./clientRoute");
const contactRoute = require("./contactRoute")

const router = Router();
//route admin
router.use("/admin", adminRoutes)

//route client
router.use("/client", clientRouter)

//route contacts
router.use("/contact", contactRoute)


module.exports = router
const { Router } = require("express");
const adminRoutes = require("./adminRoute");
const clientRouter = require("./clientRoute");
const contactRoute = require("./contactRoute")
const jobRoute = require("./jobRoute")

const router = Router();
//route admin
router.use("/admin", adminRoutes)

//route client
router.use("/client", clientRouter)

//route contacts
router.use("/contact", contactRoute)

//route jobs
router.use("/job", jobRoute)


module.exports = router
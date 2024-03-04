const {Router} = require("express")
const {postHandlerAdmin, loginHandlerAdmin} = require("./handlers/handlerAdmin")

const adminRoutes = Router()

//Routes Admin

adminRoutes.post("/register", postHandlerAdmin)

adminRoutes.post("/login", loginHandlerAdmin)

//Routes Clients



module.exports = adminRoutes;
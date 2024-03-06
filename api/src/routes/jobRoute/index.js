const{Router} = require("express")

const jobRoutes = Router()
const showByIdHandlerJob = require("./handlers/showByIdHandlerJob") 
const createHandlerJob = require("./handlers/createHandlerJob")
const showAllHandlerJob = require("./handlers/showAllHandlerJob")
const putHandlerJob = require("./handlers/putHandlerJob")
const deleteJobHandler = require("./handlers/deleteJobHandler")

jobRoutes.post("/", createHandlerJob)

jobRoutes.get("/", showAllHandlerJob)

jobRoutes.get("/:id", showByIdHandlerJob)

jobRoutes.put("/:id", putHandlerJob)

jobRoutes.delete("/:id", deleteJobHandler)

module.exports = jobRoutes
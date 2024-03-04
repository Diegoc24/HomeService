const {Router} = require("express");
const {
    handlerPostClient,
    handlerDeleteClient,
    handlerGetAllCLients, 
    handlerUpdateClient, 
    handlerGetIdCLient} = require("./handlers/handlerClient");

const clientRouter = Router()

clientRouter.post("/create", handlerPostClient)

clientRouter.delete("/:id", handlerDeleteClient)

clientRouter.get("/", handlerGetAllCLients)

clientRouter.put("/:id", handlerUpdateClient)

clientRouter.get("/:id", handlerGetIdCLient)

module.exports = clientRouter;
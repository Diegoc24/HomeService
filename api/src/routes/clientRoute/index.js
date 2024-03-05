const {Router} = require("express");
const {
    handlerPostClient,
    handlerDeleteClient,
    handlerGetAllCLients, 
    handlerUpdateClient, 
    handlerGetIdCLient} = require("./handlers/handlerClient");
const handlerReviewClient = require("./handlers/handlerReviewClient");
const handlerDeleteReviewClient = require("./handlers/handlerDeleteReviewClient");
const handlerAddedComment = require("./handlers/handlerAddedComment");
const handlerDeleteComment = require("./handlers/handlerDeleteComment");

const clientRouter = Router()


clientRouter.post("/create", handlerPostClient)

clientRouter.put("/comment/:id", handlerAddedComment)

clientRouter.delete("/comment/:id", handlerDeleteComment)

clientRouter.delete("/:id", handlerDeleteClient)

clientRouter.delete("/review/:id", handlerDeleteReviewClient)

clientRouter.get("/", handlerGetAllCLients)

clientRouter.put("/:id", handlerUpdateClient)

clientRouter.put("/review/:id", handlerReviewClient)

clientRouter.get("/:id", handlerGetIdCLient)

module.exports = clientRouter;
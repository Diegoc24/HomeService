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

//create new client
clientRouter.post("/create", handlerPostClient)
//added comment
clientRouter.put("/comment/:id", handlerAddedComment)
//delete comment
clientRouter.delete("/comment/:id", handlerDeleteComment)
//delete client
clientRouter.delete("/:id", handlerDeleteClient)
// delete review client
clientRouter.delete("/review/:id", handlerDeleteReviewClient)
//show all clients
clientRouter.get("/", handlerGetAllCLients)
// modification client
clientRouter.put("/:id", handlerUpdateClient)
//added review client
clientRouter.put("/review/:id", handlerReviewClient)
// show by id of client
clientRouter.get("/:id", handlerGetIdCLient)

module.exports = clientRouter;
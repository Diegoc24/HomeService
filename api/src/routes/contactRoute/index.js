const { Router } = require("express");
const handlerGetAllContact = require("./handlers/handlerGetAllContact");
const handlerCreateContact = require("./handlers/handlerCreateContact")
const handlerDeleteContact = require("./handlers/handlerDeleteContact");
const handlerGetIdContact = require("./handlers/handlerGetIdContact");
const handlerUpdateContact = require("./handlers/handlerUpdateContact")
const contactRoutes = Router()

contactRoutes.get("/", handlerGetAllContact)

contactRoutes.get("/:id", handlerGetIdContact)

contactRoutes.post("/", handlerCreateContact)

contactRoutes.delete("/:id", handlerDeleteContact)

contactRoutes.put("/:id", handlerUpdateContact)

module.exports = contactRoutes;
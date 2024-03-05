const controllerUpdateContact = require("../controllers/controllerUpdateContact")
const handlerUpdateContact = async (req, res) =>{
    try {
        const response = await controllerUpdateContact(req)
        res.status(201).json(response)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

module.exports = handlerUpdateContact;
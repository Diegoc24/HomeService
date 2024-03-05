const controllerDeleteContact = require("../controllers/controllerDeleteContact")
const handlerDeleteContact = async (req, res) =>{
    try {
        const response = await controllerDeleteContact(req.params)
        res.status(201).json(response)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

module.exports = handlerDeleteContact;
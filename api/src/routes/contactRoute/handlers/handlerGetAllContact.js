const controllerGetAllContacts = require("../controllers/controllerGetAllContact");


const handlerGetAllContact = async (req, res) =>{
    try {
        const response = await controllerGetAllContacts()
        res.status(200).json(response)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

module.exports = handlerGetAllContact;
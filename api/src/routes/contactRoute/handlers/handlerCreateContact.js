const controllerCreateContact = require("../controllers/controllerCreateContact")

const handlerCreateContact = async (req, res) =>{
    try {
        const response = await controllerCreateContact(req.body)
        res.status(201).json(response)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
    
}

module.exports = handlerCreateContact;
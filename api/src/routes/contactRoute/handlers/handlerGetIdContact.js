const controllerGetIdContact = require("../controllers/controllerGetIdContact")

const handlerGetIdContact = async (req,res) =>{
    try {
        const response = await controllerGetIdContact(req.params)
        res.status(200).json(response)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

module.exports = handlerGetIdContact;
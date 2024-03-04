
const loginControllerAdmin = require("../controllers/loginControllerAdmin");
const postControllerAdmin = require("../controllers/postControllerAdmin");

const postHandlerAdmin = async (req, res) =>{
    try {
        const response = await postControllerAdmin(req.body)
        await res.status(201).json(response)
    } catch (error) {
        await res.status(404).json({message: error.message})
    }
}

const loginHandlerAdmin = async (req, res) =>{
    try {
        
        const response = await loginControllerAdmin(req.body)
        res.send(response)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

module.exports = {loginHandlerAdmin, postHandlerAdmin};
const controllerCreateClient = require("../controllers/controllerCreateClient")
const controllerDeleteClient = require("../controllers/controllerDeleteClient")
const controllerGetAllClient = require("../controllers/controllerGetAllClient")
const controllerUpdateClient = require("../controllers/controllerUpdateClient")
const controllerGetIdClient = require("../controllers/controllerGetIdClient")
const handlerPostClient = async (req, res) =>{
    try {
        const response = await controllerCreateClient(req.body)
        res.status(201).json(response)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
    
}

const handlerDeleteClient = async (req, res) =>{
    
    try {
        const response = await controllerDeleteClient(req.params)
        res.status(201).json(response)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

const handlerGetAllCLients = async (req, res) =>{
    try {
        const response = await controllerGetAllClient()
        res.status(200).json(response)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

const handlerUpdateClient = async (req, res) =>{
    try {
        const response = await controllerUpdateClient(req)
        res.status(201).json(response)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

const handlerGetIdCLient = async (req, res) => {

    try {
        const response = await controllerGetIdClient(req.params)
        res.status(200).json(response)
    } catch (error) {
        res.status(404).json({message: error.message})
    }

}



module.exports = {
    handlerPostClient,
    handlerDeleteClient,
    handlerGetAllCLients,
    handlerUpdateClient,
    handlerGetIdCLient
}
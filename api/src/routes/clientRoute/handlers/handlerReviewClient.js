const controllerReviewClient = require("../controllers/controllerReviewClient")

const handlerReviewClient = async(req,res) =>{
    try {
        const response = await controllerReviewClient(req)
        res.status(201).json(response)
    } catch (error) {
        res.status(404).json({message: error.message})        
    }
}

module.exports = handlerReviewClient;
const controllerDeleteReviewClient = require("../controllers/controllerDeleteReviewClient")

const handlerDeleteReviewClient = async (req, res) => {
    try {
        
        const result = await controllerDeleteReviewClient(req.params)
        res.status(200).json(result)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
    
}

module.exports = handlerDeleteReviewClient;
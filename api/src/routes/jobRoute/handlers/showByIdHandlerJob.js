const showByIdControllerJob = require("../controllers/showByIdControllerJob")

const showByIdHandlerJob = async (req, res) => {
    try {
        const response = await showByIdControllerJob(req.params)
        res.status(200).json(response)
    } catch (error) {
        res.status(404).json({message: error.message})
    }   
}

module.exports = showByIdHandlerJob
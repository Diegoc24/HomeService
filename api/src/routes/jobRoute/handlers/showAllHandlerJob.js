const showAllControllerJob = require("../controllers/showAllControllerJob")

const showAllHandlerJob = async (req, res) =>{
    try {
        const response = await showAllControllerJob()
        res.status(200).json(response)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

module.exports = showAllHandlerJob;
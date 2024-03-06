const putControllerJob = require("../controllers/putControllerJob")

const putHandlerJob = async (req, res) =>{
    try {
        const response = await putControllerJob(req.body, req.params)
        res.status(201).json(response)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

module.exports = putHandlerJob;
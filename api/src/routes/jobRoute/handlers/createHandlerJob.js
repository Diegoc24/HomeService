const createControllerJob = require("../controllers/createControllerJob")

const createHandlerJob = async (req, res) =>{
    try {
        const response = await createControllerJob(req.body)
        res.status(201).json(response)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

module.exports = createHandlerJob;
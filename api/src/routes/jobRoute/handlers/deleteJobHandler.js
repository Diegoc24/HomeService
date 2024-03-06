const deleteJobController = require("../controllers/deleteJobController")

const deleteJobHandler = async (req, res) =>{
    try {
        const response = await deleteJobController(req.params)
        res.status(201).json(response)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

module.exports = deleteJobHandler;
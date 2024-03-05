const controllerDeleteComment = require("../controllers/controllerDeleteComment")

const handlerDeleteComment = async (req, res) =>{
    try {
        const response = await controllerDeleteComment(req.params)
        res.status(201).json(response)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

module.exports = handlerDeleteComment
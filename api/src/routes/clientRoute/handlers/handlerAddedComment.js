const controllerAddedComment = require("../controllers/controllerAddedComment")

const handlerAddedComment = async (req, res) =>{
    try {
        
        const response = await controllerAddedComment(req.body, req.params)
        res.status(201).json(response)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}
module.exports = handlerAddedComment;
const client = require("../../../database/model/client")


const controllerAddedComment = async ({comment},{id}) =>{

    if(!comment) throw new Error("you must send a comment")

    if(!id) throw new Error("you must send a id")

    if(isNaN(Number(id))) throw new Error("the id must be a number")

    const updateComment = await client.update({comment: comment}, {where: {id: id}, returning: true})
    
    return updateComment
}

module.exports = controllerAddedComment;
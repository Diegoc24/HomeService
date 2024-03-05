const client = require("../../../database/model/client")

const controllerDeleteComment = async ({id}) => {

    if(!id) throw new Error("you must send the id")

    if(isNaN(Number(id))) throw new Error("the id must be a number")

    const deletedComment = await client.update({comment: null}, {where: {id: id}, returning: true})

    if(!deletedComment) throw new Error("the requested client does not exist")

    return deletedComment
}

module.exports = controllerDeleteComment;
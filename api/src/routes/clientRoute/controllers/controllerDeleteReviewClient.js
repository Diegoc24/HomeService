const client = require("../../../database/model/client");
const controllerDeleteReviewClient = async ({id}) =>{
    console.log("entro");
    console.log(id);
    if(!id) throw new Error("you must send the id")
    if(isNaN(Number(id))) throw new Error("the id must be a number")
    const deletedReview = await client.update({review: null}, {where: {id: id}, returning: true})
    return deletedReview
}

module.exports = controllerDeleteReviewClient;
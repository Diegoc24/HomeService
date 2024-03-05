const client = require("../../../database/model/client")

const controllerReviewClient = async ({params, body}) =>{
console.log("entro");
    const {review} = body
    const {id} = params

    if(!review) throw new Error("you most send a review number")
    if(!id) throw new Error("you most send a id number")
    if(isNaN(Number(id))) throw new Error("the id must be a number")
    if(isNaN(Number(review))) throw new Error("the review must be a number")
    if(review > 10 || review < 0) throw new Error("the review must be between 0 and 10")
    const findReviews = await client.findByPk(id)
    if(!findReviews) throw new Error("the requested client does not exist")


    let oldReview = findReviews.dataValues.review 
    if(!Array.isArray(oldReview)){
        oldReview = []
    }
    const newReview = [review, ...oldReview]
    const updateReview = await client.update({review: newReview}, {where: {id: id}, returning: true} )

    return updateReview


}

module.exports = controllerReviewClient;
const job = require("../../../database/model/job")

const putControllerJob = async ({service, unit, price, condition,startDate, dateFinish, review, comment, clientId}, {id}) =>{


    const findJob = await job.findByPk(id)

    if(!findJob) throw new Error("no job was found with that id")

    if(isNaN(Number(id))) throw new Error("the id must be a number")

    if(price && isNaN(Number(price))) throw new Error("the price must be a number")

    if(review && isNaN(Number(review))) throw new Error("the review must be a number")

    if(review > 10 || review < 0) throw new Error("the review must be between 0 and 10")
    
    const extractNumber = (unit)=>{
        let unitNumber = "";
        for(let i = 0;unit?.length > i;i++){
           
            if(!isNaN(Number(unit[i]))){
                
                unitNumber += unit[i]
            }else if(isNaN(Number(unit[i])) && unitNumber !== ""){
               
                
                return  Number(unitNumber)
            }
        }
        if(unitNumber === "" && unit) throw new Error("the unit must be a number")
        
    }

    const unitBD = extractNumber(findJob.dataValues.unit)
    const unitNew = unit ? extractNumber(unit) : unitBD
   

    const newPrice = price ? price !== findJob.dataValues.price ? price : findJob.dataValues.price : findJob.dataValues.price
    const newTotalPrice = unitNew * newPrice !== findJob.dataValues.total_price ? unitNew * newPrice : findJob.dataValues.total_price 
    const newUnit = unitBD !== unitNew ? unit : findJob.dataValues.unit 
    const newService = service !== findJob.dataValues.service ? service : findJob.dataValues.service
    const newCondition = condition !== findJob.dataValues.condition ? condition : findJob.dataValues.condition
    const newStartDate = startDate !== findJob.dataValues.startDate ? startDate : findJob.dataValues.startDate
    const newDateFinish = dateFinish !== findJob.dataValues.dateFinish ? dateFinish : findJob.dataValues.dateFinish
    const newReview = review !== findJob.dataValues.review ? review : findJob.dataValues.review
    const newComment = comment !== findJob.dataValues.comment ? comment : findJob.dataValues.comment
    const newClientId = clientId !== findJob.dataValues.clientId ? clientId : findJob.dataValues.clientId

    const updateJob = await job.update({
        service: newService,
        unit: newUnit,
        price: newPrice, 
        condition: newCondition,
        startDate: newStartDate, 
        dateFinish: newDateFinish, 
        review: newReview, 
        comment: newComment, 
        clientId: newClientId,
        total_price: newTotalPrice
    },
        {where: {id: id}, 
        returning: true
    })

    return updateJob;
}

module.exports = putControllerJob;
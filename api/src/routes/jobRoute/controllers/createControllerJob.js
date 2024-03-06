const job = require("../../../database/model/job");

const createControllerJob = async ({service, unit, price, condition,startDate, dateFinish, review, comment, clientId}) =>{
    
    if(!service, !unit, !price, !condition) throw new Error("you most send a service, unit, price, condition")
    if(isNaN(Number(price))) throw new Error("the price and unit must be a number")
    let unitNumber = 0;
const extractNumber = (unit)=>{
    let unitNumber = 0;
    for(let i = 0;unit.length > i;i++){
        
        if(!isNaN(Number(unit[i]))){
            unitNumber += unit[i]
        }else if(isNaN(Number(unit[i]))){
            return Number(unitNumber)
        }
    }
    
}
    const total = extractNumber(unit) * price
    
    const newJob = await job.create({
        service,
        unit, 
        price,
        total_price: total,
        startDate, 
        dateFinish, 
        condition, 
        review, 
        comment, 
        clientId
    })

    return newJob

}

module.exports = createControllerJob;
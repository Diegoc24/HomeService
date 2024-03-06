const job = require("../../../database/model/job")
const client = require("../../../database/model/client")
const showByIdControllerJob = async ({id}) => {
    if(isNaN(Number(id))) throw new Error("the id must be a number")

    const data = await job.findOne(
        {
            where: {id: id},
            include: [{model: client, as:"client",
            attributes: ["name", "last_name", "id", "dni",]}]
        })
    
    return data
}

module.exports = showByIdControllerJob;
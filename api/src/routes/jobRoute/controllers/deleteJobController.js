const job = require("../../../database/model/job")

const deleteJobController = async ({id}) =>{

    if(!id) throw new Error("you must send the id") 
    if(isNaN(Number(id))) throw new Error("the id must be a number")

    const deleteJob = await job.destroy({where: {id: id}}, {returning: true})

    return {
        deleteJob: deleteJob,
        state: "deleted successfully"
    }

}

module.exports = deleteJobController;
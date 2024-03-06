const job = require("../../../database/model/job")
const client = require("../../../database/model/client")
const showAllControllerJob = async () => {

    const data = await job.findAll({
        include: [{model: client, as:"client",
        attributes: ["name", "last_name", "id", "dni"]}]
    })

    return data
}

module.exports = showAllControllerJob;
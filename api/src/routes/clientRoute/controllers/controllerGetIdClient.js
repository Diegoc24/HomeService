const client = require("../../../database/model/client")

const controllerGetIdClient = async ({id}) =>{
    
    if(!id) throw new Error("No ID received")
    if(isNaN(Number(id))) throw new Error("The id must be a number")
    const findById = await client.findByPk(id)

    if(!findById) throw new Error("the requested client does not exist")

    return findById;

}

module.exports = controllerGetIdClient;
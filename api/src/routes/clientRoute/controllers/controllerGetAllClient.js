const client = require("../../../database/model/client")

const controllerGetAllClient = async() =>{
    const findAllClient = await client.findAll()
    if(findAllClient){
        return findAllClient
    }else{
        return {message: "no clients"}
    }
}

module.exports = controllerGetAllClient;
const client = require("../../../database/model/client")
const controllerDeleteClient =async ({id}) =>{
    
    if(!id) throw new Error("you must send the id")
    
    const deletedClient = await client.destroy({where: {id: id}})
    
    if(deletedClient !== 0) {
       
        return{
            message: "client deleted",
            numberClient: deletedClient
        }
    }else{
        throw new Error("client not deleted")
    }
}

module.exports = controllerDeleteClient
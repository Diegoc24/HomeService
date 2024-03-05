const contact = require("../../../database/model/contact")

const controllerGetIdContact = async ({id})=>{
    
    if(!id) throw new Error("No ID received")

    if(isNaN(Number(id))) throw new Error("The id must be a number")
    
    const findById = await contact.findByPk(id)

    if(!findById) throw new Error("the requested contact does not exist")

    return findById;
    
}

module.exports = controllerGetIdContact;
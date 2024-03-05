const contact = require("../../../database/model/contact")

const controllerGetAllContacts = async() =>{
    const findAllContact = await contact.findAll()
    if(findAllContact){
        return findAllContact
    }else{
        return {message: "no contacts"}
    }
}

module.exports = controllerGetAllContacts;
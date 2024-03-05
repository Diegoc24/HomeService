const contact = require("../../../database/model/contact")
const controllerDelectContact = async ({id}) =>{

    if(!id) throw new Error("you must send the id")
    
    const deletedContact = await contact.destroy({where: {id: id}})
    
    if(deletedContact !== 0) {
       
        return{
            message: "contact deleted",
            numberContact: deletedContact
        }
    }else{
        throw new Error("contact not deleted")
    }

}

module.exports = controllerDelectContact;
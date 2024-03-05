const contact = require("../../../database/model/contact")

const controllerUpdateContact = async ({params, body}) => {

    const id = params.id

   const {name, last_name, phone, email, address, comment} = body

    const findContact = await contact.findByPk(id)

    if(!findContact) throw new Error("contact not found")

    const contac = findContact.dataValues

    const newName = name ? name : contac.name
    const newLastName = last_name ? last_name : contac.last_name
    const newPhone = phone ? phone : contac.phone
    const newEmail = email ? email : contac.email
    const newAddress = address ? address : contac.address
    const newComment = comment || comment === null ? comment : contac.comment
    

    const updateContact = await contact.update({
        
            name: newName,
            last_name: newLastName,
            phone: newPhone,
            email: newEmail,
            address: newAddress,
            comment: newComment
       
    },
    {
        where:{
            id
        },
    
        returning: true
    })
    return updateContact;


}

module.exports = controllerUpdateContact;
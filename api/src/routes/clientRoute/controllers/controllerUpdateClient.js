const { where } = require("sequelize")
const client = require("../../../database/model/client")
const controllerUpdateClient = async ({params, body}) =>{
    const id = params.id

   const {name, last_name, phone, email, address, condition_iva, dni} = body

    const findClient = await client.findByPk(id)

    if(!findClient) throw new Error("client not found")

    const clien = findClient.dataValues

    const newName = name ? name : clien.name
    const newLastName = last_name ? last_name : clien.last_name
    const newPhone = phone ? phone : clien.phone
    const newEmail = email ? email : clien.email
    const newAddress = address ? address : clien.address
    const newConditionIva = condition_iva ? condition_iva : clien.condition_iva
    const newDni = dni ? dni : clien.dni
    

    const updateClient = await client.update({
        
            name: newName,
            last_name: newLastName,
            phone: newPhone,
            email: newEmail,
            address: newAddress,
            condition_iva: newConditionIva,
            dni: newDni
       
    },
    {
        where:{
            id
        },
    
        returning: true
    })
    return updateClient;
}

module.exports = controllerUpdateClient;
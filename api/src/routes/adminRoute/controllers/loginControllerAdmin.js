const admin = require("../../../database/model/admin")
const bcript = require("bcrypt")
const loginControllerAdmin = async ({email, password}) =>{

    if(!email || !password){
        throw new Error("you must send the email and password")
    }

    const verificationAdmin = await admin.findAll({where:{email}})

    if(verificationAdmin.length === 0) {
        throw new Error("The email send don't exist")
    }
    const data = verificationAdmin[0].dataValues
    const validationPassword = await bcript.compare(password, data.password)
    
    if(validationPassword){
        return{
            access: "access true",
            id: data.id,
            name: data.name,
            last_name: data.last_name,
            email: data.email,
            position: data.position,
            address: data.address,
            phone: data.phone
        }
    }else{
        return{
            error: "access denied"
        }
    }

    
    
return verificationAdmin

}

module.exports = loginControllerAdmin;
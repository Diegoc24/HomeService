const bcript = require("bcrypt")
const admin = require("../../../database/model/admin")
const postControllerAdmin = async ({name, last_name, position, email, address, phone, password}) =>{
    if(!name || !last_name || !email || !position || !address || !phone || !password){
        throw new Error("The data is incomplete")
    }

    let findEmail = await admin.findAll({
        where:{
            email: email
        }
    })
    
    
    if(findEmail.length !== 0) throw new Error("the email exist")
    const hashPassword = await bcript.hash(password, 10)
    if(!hashPassword) throw new Error("occurred one problem in the hashing")
   const adminCreated = await admin.create({
        name,
        last_name,
        position,
        address,
        phone,
        email,
        password: hashPassword
    })

    if(adminCreated){
        return adminCreated
    }else{
        throw new Error("Error occurred")
    }
}

module.exports = postControllerAdmin;
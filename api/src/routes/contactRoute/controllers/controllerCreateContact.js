const contact = require("../../../database/model/contact")
const controllerCreateContact = async ({ name, last_name, phone, email, address, comment }) =>{
    
        if (!name || !last_name || !phone || !email || !address) {
            throw new Error("Incomplete data provided.");
        }
        
        const createdContact = await contact.create({
            
            name,
            last_name,
            phone,
            email,
            address,
            comment
        });
        if(createdContact){
            return createdContact
        }
        

       
    
        
    
}

module.exports = controllerCreateContact;
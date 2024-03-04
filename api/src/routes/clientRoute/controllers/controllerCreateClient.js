const admin = require("../../../database/model/admin");
const client = require("../../../database/model/client");

const controllerCreateClient = async ({ dni, name, last_name, phone, email, address, condition_iva, id_admin }) => {
    try {
        if (!dni || !name || !last_name || !phone || !email || !address || !condition_iva || !id_admin) {
            throw new Error("Incomplete data provided.");
        }
        if(typeof dni !== "number"){
            throw new Error("Dni not is a number")
        }
        const createdClient = await client.create({
            dni,
            name,
            last_name,
            phone,
            email,
            address,
            condition_iva,
            adminId: id_admin,
        });

        

        return createdClient;
    } catch (error) {
        throw new Error(`Error creating client: ${error.message}`);
    }
};

module.exports = controllerCreateClient;


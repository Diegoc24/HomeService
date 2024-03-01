const {Sequelize} = require("sequelize")

require("dotenv").config()
const pg = require("pg")

const {
    DB_NAME,
    DB_USER,
    DB_PASSWORD,
    DB_HOST,
    DB_PORT,
    DEPLOYING,
    DB_URI} = process.env


    
    const sequelize = new Sequelize(`postgres://postgres:123456@localhost:5432/HomeService`,{
    logging: false,
    native: false,
    dialectModule: pg,
})


// admin.hasMany(client, {foreignKey: "admin_id"})
// client.belongsTo(admin, {foreignKey: "admin_id"})

module.exports = sequelize;

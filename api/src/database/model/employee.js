const sequelize = require("../../db")
const {DataTypes} = require("sequelize")

const employee = sequelize.define("employee", {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dni: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    }, 
    address:{
        type: DataTypes.STRING,
        allowNull: false
    },
    position:{
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false
    },
    condition_iva:{
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = employee;
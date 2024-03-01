const sequelize = require("../../db")
const {DataTypes} = require("sequelize")

const contact = sequelize.define("contact", {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false

    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false
    },
    address:{
        type: DataTypes.STRING,
        allowNull: false

    },
    comment:{
        type: DataTypes.TEXT
    }
})

module.exports = contact;
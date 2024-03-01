const sequelize = require("../../db")
const {DataTypes} = require("sequelize")

const service = sequelize.define("service", {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    unit: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = service;

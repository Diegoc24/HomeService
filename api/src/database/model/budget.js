const sequelize = require("../../db")
const {DataTypes} = require("sequelize")

const budget = sequelize.define("budget", {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    unit: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price_with_discount: {
        type: DataTypes.STRING,
        allowNull: false
    },
    undiscounted_price: {
        type: DataTypes.STRING,
        allowNull: false
    },
    discount:{
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = budget;
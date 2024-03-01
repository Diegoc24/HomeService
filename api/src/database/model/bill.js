const sequelize = require("../../db")
const {DataTypes} = require("sequelize")

const bill = sequelize.define("bill", {
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

module.exports = bill;
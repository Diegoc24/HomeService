const sequelize = require("../../db")
const {DataTypes} = require("sequelize")

const client = sequelize.define("client", {
    dni:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
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
    condition_iva:{
        type: DataTypes.STRING,
        allowNull: false
    },
    review:{
        type: DataTypes.ARRAY(DataTypes.INTEGER),
        allowNull: false
    },
    comment:{
        type: DataTypes.TEXT,
        allowNull: true
    }
})

module.exports = client;
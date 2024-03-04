const sequelize = require("../../db")

const {DataTypes} = require("sequelize")
const admin = sequelize.define("admin", {

    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    last_name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    position:{
        type: DataTypes.STRING,
        allowNull: false
    },
    address:{
        type: DataTypes.STRING,
        allowNull: false
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false
    },
    phone:{
        type: DataTypes.STRING,
        allowNull: false
    },
    is_admin:{
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
   
})

module.exports = admin;


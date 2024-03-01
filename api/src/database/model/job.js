const sequelize = require("../../db")
const {DataTypes} = require("sequelize")

const job = sequelize.define("job", {
    service: {
        type: DataTypes.STRING,
        allowNull: false
    },
    unit: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price:
    {
        type: DataTypes.STRING,
        allowNull: false
    },
    condition: {
        type: DataTypes.STRING,
        allowNull: false
    },
    review: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    comment:{
        type: DataTypes.STRING,
        allowNull: true
    }
})

module.exports = job;
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
        type: DataTypes.INTEGER,
        allowNull: false
    },
    total_price:
    {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    condition: {
        type: DataTypes.STRING,
        allowNull: false
    },
    startDate:{
        type: DataTypes.DATE,
        allowNull: false
    },
    dateFinish:{
        type: DataTypes.DATE,
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
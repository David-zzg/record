//用户表
const Sequelize = require('sequelize');
const dbHelper = require("../db/util");
module.exports = {
    name:"user",
    attr:{
        id:{
            type:Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement: true
        },
        username:{
            type:Sequelize.STRING,
            allowNull: false,
            unique:true
        },
        password:{
            type:Sequelize.STRING,
            allowNull: false
        },
        organization_id:{
            type:Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: dbHelper.getModelByName("organization"),
                key: 'id',
            }
        }
    }
}
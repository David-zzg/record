//用户权限表
const Sequelize = require('sequelize');
const dbHelper = require("../db/util");
module.exports = {
    name:"user_power",
    attr:{
        id:{
            type:Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement: true
        },
        u_id:{
            type:Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: dbHelper.getModelByName("user"),
                key: 'id',
            }
        },
        power_id:{
            type:Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: dbHelper.getModelByName("power"),
                key: 'id',
            }
        }
    }
}
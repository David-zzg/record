//sku表
const Sequelize = require('sequelize');
const dbHelper = require("../db/util");
module.exports = {
    name:"sku",
    attr:{
        id:{
            type:Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement: true
        },
        sku:{
            type:Sequelize.STRING,
            allowNull: false,
            unique:'sku'
        },
        model_id:{
            //型号
            type:Sequelize.INTEGER,
            unique:'sku',
            allowNull: false,
            references: {
                model: dbHelper.getModelByName("model"),
                key: 'id',
            }
        },
        category_id:{
            //大类id
            type:Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: dbHelper.getModelByName("category"),
                key: 'id',
            }
        }
    }
}
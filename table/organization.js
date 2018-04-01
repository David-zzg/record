//组织表
const Sequelize = require('sequelize');
module.exports = {
    name:"organization",
    attr:{
        id:{
            type:Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement: true
        },
        name:{
            type:Sequelize.STRING,
            allowNull: false,
            unique:true
        }
    }
}
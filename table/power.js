//权限表
const Sequelize = require('sequelize');
module.exports = {
    name:"power",
    attr:{
        id:{
            type:Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement: true
        },
        dcm:{
            type:Sequelize.STRING,
            allowNull: false,
            unique:true
        },
        name:{
            type:Sequelize.STRING,
            allowNull: false
        }
    }
}
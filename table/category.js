//型号表
const Sequelize = require('sequelize');
module.exports = {
    name:"category",
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
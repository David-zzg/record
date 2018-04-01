//型号表
const Sequelize = require('sequelize');
module.exports = {
    name:"model",
    attr:{
        id:{
            type:Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement: true
        },
        model:{
            type:Sequelize.STRING,
            allowNull: false,
            unique:true
        }
    }
}
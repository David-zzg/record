const sequelize = require('../db');
const path = require("path");
const modelConfig = require("../config/db_model");

module.exports = {
    //根据表名获取model
    getModelByName:function (name) {
        let configPath = path.resolve(__dirname,"../table/"+name);
        let tableConfig = require(configPath)
        let f = (sequelize, DataTypes) => {
            return sequelize.define(tableConfig.name, tableConfig.attr,modelConfig)
        } 
        return sequelize.import(configPath,f)
    }
}
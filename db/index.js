const Sequelize = require('sequelize');
const dbConfig = require("../config/db.js");
const sequelize = new Sequelize(dbConfig.database, dbConfig.username,dbConfig.password, {
    dialect: 'mysql',
    host: dbConfig.host
});

module.exports = sequelize;

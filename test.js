const Sequelize = require('sequelize');
const dbConfig = require("./config/db.js");
const sequelize = new Sequelize(dbConfig.database, dbConfig.username,dbConfig.password, {
    dialect: 'mysql',
    host: dbConfig.host
});
// sequelize
//   .authenticate()
//   .then(() => {
//     console.log('Connection has been established successfully.');
//   })
//   .catch(err => {
//     console.error('Unable to connect to the database:', err);
//   });



const tableSkuConfig = require("./table/sku");
const tableSku = sequelize.define(tableSkuConfig.name,tableSkuConfig.attr);
  
  // force: true will drop the table if it already exists
  tableSku.sync({force: true}).then(() => {
    // Table created
    // return User.create({
    //   firstName: 'John',
    //   lastName: 'Hancock'
    // });
    console.log(1)
  });
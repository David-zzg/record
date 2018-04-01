const sequelize = require('../db');
const dbHelper = require("../db/util");
// 产品表
function createSku() {
    return handleTable("sku","sync")
}
//型号表
function createModel() {
    return handleTable("model","sync")
}

function handleTable(name,method) {
    const table = dbHelper.getModelByName(name)
    // force: true will drop the table if it already exists
    return table[method]({force: true})
}

function drop() {
    return handleTable("sku","drop")
        .then(()=>handleTable("model","drop"))
        .then(()=>handleTable("category","drop"))
}



function create() {
    return handleTable("category","sync")
        .then(()=>handleTable("model","sync"))
        .then(()=>handleTable("sku","sync"))
    
}

function createTable(name) {
    return handleTable(name,"sync")
}

function dropTable(name) {
    return handleTable(name,"drop")
}


createTable("organization")
    .then(()=>createTable("power"))
    .then(()=>createTable("user"))
    .then(()=>createTable("user_power"))



// drop().then(()=>create())

// drop()
// create()

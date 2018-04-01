const dbHelper = require('../db/util');
const path  = require("path");

class Controller{
    constructor(req,res,config){
        this.req = req;
        this.res = res;
        this.loadDb(config||{})
    }
    loadDb(config){
        //加载数据库
        if(config.tableName){
            this.table = dbHelper.getModelByName(config.tableName)
        }
    }
    get(key){
        return this.req.query[key]||null;
    }
    //promise形式
    getQuery(key){
        if(typeof key == "string"){
            return new Promise((resolve,reject)=>{
                var value = this.req.query[key]
                if(typeof value!="undefined"){
                    resolve(value)
                }else{
                    reject("missing params "+key)
                }
            })
        }else{
            //数组形式
            let output = {};
            let query = this.req.query;
            for(let index in key){
                let item = key[index];
                var value = query[item];
                if(typeof value!="undefined"){
                    output[item] = value
                }else{
                    return Promise.reject("missing params "+item)
                }
            }
            return Promise.resolve(output);
        }
        
    }
}

module.exports = Controller;
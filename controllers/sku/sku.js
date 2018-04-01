const BaseController = require("../../core/Controller");
class Sku extends BaseController{
    constructor(req,res){
        super(req,res,{
            tableName:"sku"
        });
    }

    index(){
        return this.table.create({
            sku:"123123",
        })
    }


}

module.exports = Sku;
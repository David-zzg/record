const BaseController = require("../../core/Controller");
class Model extends BaseController{
    constructor(req,res){
        super(req,res,{
            tableName:"model"
        });
    }

    index(){
        return this.get("d")
    }

    //新增型号
    addModel(){
        let p = this.getQuery("model");
        p = p.then(version=>{
            return this.table.create({
                model:version
            })
        });
        return p;
    }


}

module.exports = Model
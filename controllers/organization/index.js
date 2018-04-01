const BaseController = require("../../core/Controller");
class Index extends BaseController{
    constructor(req,res){
        super(req,res,{
            tableName:"organization"
        });
    }
    //增加组织
    addOrganization(req,res){
        return this.getQuery('name')
            .then(name=>{
                return this.table.create({name})
            })
    }

}

module.exports = Index
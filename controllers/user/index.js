const BaseController = require("../../core/Controller");
class Index extends BaseController{
    constructor(req,res){
        super(req,res,{
            tableName:"user"
        });
    }
    //增加用户
    addUser(req,res){
        return this.getQuery(['username','password','organization_id'])
            .then(({username,password,organization_id})=>{
                return this.table.create({username,password,organization_id})
            })
    }

    

}

module.exports = Index
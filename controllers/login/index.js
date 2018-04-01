const BaseController = require("../../core/Controller");
const {loginIn} = require("../../core/login")
const dbHelper = require("../../db/util")
class Index extends BaseController{
    constructor(req,res){
        super(req,res,{
            tableName:"user"
        });
    }
    //登陆
    index(req,res){
        return this.getQuery(["username","password"])
            .then(({username,password})=>{
                return this._findUser({username,password})
                // .then(()=>)
                // // return username+'_'+password
                // return loginIn(req,{username,uid:1})
            })
            .then(data=>this._formatUserInfo(data))
            .then(userinfo=>loginIn(req,userinfo));
    }

    //格式化
    _formatUserInfo(data){
        let userinfo = {
            username:data.username,
            uid:data.id,
            organization:data.organization.name
        }
        return userinfo;
    }

    //根据账号密码查找用户
    _findUser(obj){
        let organization = dbHelper.getModelByName("organization");
        // organization.hasOne(this.table,{
        //     foreignKey:"organization_id"
        // })
        this.table.belongsTo(organization,{
            foreignKey:"organization_id"
        })
        return this.table.findOne({
            where:obj,
            include: [organization]
        }).then(data=>{
            if(data===null){
                return Promise.reject("auth fail");
            }else{
                return data.dataValues;
            }
        });
    }

}

module.exports = Index
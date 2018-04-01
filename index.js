var express = require('express');
var app = express();
var session = require('express-session');

const path = require("path");
const {checkLogin} = require("./core/login");
const {checkRight} = require("./core/rbac");
//session
app.use(session({ 
    secret: 'dddzhang', 
    cookie: { maxAge:  60000000 },
}))


app.get('*', function(req, res) {
    //判断是否是node接口
    let p = checkNode(req,res);
    //判断dcm
    p = p.then(getRoute);
    //判断是否登陆
    p = p.then(checkLogin)
    //判断有无权限
    p = p.then(checkRight)
    //加载对应的实例
    p = p.then(execRoute);

    return p.then(data=>{
        res.send(showData(data))
    }).catch(err=>{
        if(err&&err.errors){
            let errArr = err.errors.map(item=>item.message);
            errArr.unshift(err.toString());
            res.send(showError(errArr.join(";")))
            return
        }
        console.log(err)
        res.send(showError(err.toString()))
        return;
    })
});



app.listen(3000);


//检测是否是node接口
function checkNode(req,res) {
    return new Promise((resolve,reject)=>{
        if(/\/node\/?/.test(req.params[0])){
            resolve({req,res})
        }else{
            reject(showError("not match node"));
        }
    })
}




//获取dcm
function getRoute({req,res}) {
    return new Promise((resolve,reject)=>{
        let query =  Object.assign(req.query);
        if(query.d&&query.c&&query.m){
            resolve({req,res,query})
        }else{
            reject(showError("missing d c m"));
        }
    })
}

//解析路由
function execRoute({req,res,query}) {
    try{
        let filePath = path.resolve(__dirname,"./controllers/"+query.d.toLowerCase()+"/"+query.c.toLowerCase())
        let Controller = require(filePath);
        let instance = new Controller(req,res);
        return instance[query.m](req,res);
    }catch(e){
        return Promise.reject(e);
    }
}

function showError(msg) {
    return {
        errCode:-1,
        msg:msg
    }
}

function showData(data) {
    return Object.assign({
        errCode:0,
        data:data
    })
}
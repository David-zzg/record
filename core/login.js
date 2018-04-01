//判断是否有登陆
function checkLogin({req,res,query}) {
    return Promise.resolve({req,res,query});
    if(req.query.d=="login"){
        //登陆接口不做拦截
        return Promise.resolve({req,res,query});
    }
    if(req.session.userInfo&&req.session.userInfo.uid){
        return Promise.resolve({req,res,query});
    }else{
        return Promise.reject("no login");
    }
}

//登陆，存入session
function loginIn(req,userInfo) {
    req.session.userInfo = userInfo;
    return Promise.resolve(userInfo)
}





module.exports = {
    checkLogin,
    loginIn
}
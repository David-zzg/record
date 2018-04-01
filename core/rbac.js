//判断是否有权限
function checkRight({req,res,query}) {
    console.log(1)
    return Promise.resolve({req,res,query});
}


module.exports = {
    checkRight
}
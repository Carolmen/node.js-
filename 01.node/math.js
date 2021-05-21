/*
    定义一个模块 math
        - 在该模块中提供两个方法
            add(a,b);//求两个数的和
            mul(a,b);//求两个数的积
 */
/*   自我思考
var a;
var b;
function add(a,b){
    console.log(a+b);
}
module.exports = add;

function mul(a,b){
    console.log(a*b);
}
module.exports = mul;
 */


exports.add = function (a,b) {
    return a+b;
};

exports.mul = function (a,b) {
    return a*b;
};
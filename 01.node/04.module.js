var a = 10;

/*
    在node中有一个全局对象global，它的作用和网页中windows类似
        在全局创建的变量都会作为global的属性保存
        在全局创建的函数都会作为global的方法保存

    当node在执行模块中的代码时，它会首先在代码的最顶部，添加如下代码
        function (exports, require, module, __filename, __dirname) {

    在代码的最底部，添加如下代码
        }
    实际上模块中的的代码都是包装在一个函数中直线形的，并且在函数执行时，同时传递进5个实参
    exports
        - 该对象用来将变量或函数暴露到外部
    require
        - 函数，用来引入外部的模块
    module
        - module代表的时当前模块的本身
        - exports就是module的属性
        - 既可以使用exports导出，也可以使用module.exports导出
    __filename
        "C:\Program Files\nodejs\node.exe" T:\WebstormProjects\nodestudy\01.node\04.module.js
        - 当前模块的完整路径
     __dirname
        -当前模块所在文件夹
 */

// console.log(global.a);

/*
    arguments.callee
        - 这个属性保存的是当前执行的函数对象
 */
console.log(arguments.callee+"")
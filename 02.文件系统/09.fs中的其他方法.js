var fs = require("fs")
/*
    fs.exitSync(path)
        - 检查一个文件是否存在
*/
var isExists = fs.existsSync("hello.txt");
// console.log(isExists);

/*
     fs.stat(path[, options], callback)
     fs.stat(path)
        - 获取文件的状态
        - 它会给我们返回一个对象，这个对象中保存了当前对象状态的相关信息
*/
fs.stat("hello.txt",function (err,stat) {
    /*
        - size 文件的大小
        - isFile()  是否是一个文件
        - isDirectory()是否是一个文件夹
        。。。。详细见node.js文档
    */
    // console.log(stat.size)
})

/*
    fs.unlink(path, callback)
    fs.unlinkSync(path)
        - 删除文件
*/
// fs.unlinkSync("hello.txt")

/*
    fs.readdir(path[, options], callback)
    fs.readdirSync(path[, options])
        - 读取一个目录的目录结构
            - files是一个字符串数组，每一个元素就是一个文件夹或文件的名字
*/
// fs.readdir(".",function (err,files) {
//     if(!err){
//         console.log(files);
//     }
// });

/*
    fs.truncate(path[, len], callback)
    fs.truncateSync(path[, len])
        - 截断文件,将文件修改为指定的大小
*/
// fs.truncateSync("hello2.txt",10)

/*
    fs.mkdir(path[, options], callback)
    fs.mkdirSync(path[, options])
        - 创建一个目录
*/
// fs.mkdirSync("hello");//创建一个文件夹

// fs.rmdirSync("hello");//删除一个文件夹

/*
    fs.rename(oldPath, newPath, callback)
    fs.renameSync(oldPath, newPath)
        - 对文件进行重命名
        - 参数
            oldPath 旧的路径
            newPath 新的路径
            callback 回调函数
*/
/*fs.rename("hello.jpg","bg.jpg",function (err) {
    if (!err){
        console.log("修改成功~~");
    }
});*/
/*fs.rename("hello2.jpg","T:\\WebstormProjects\\nodestudy\\01.node\\hello.jpg",function (err) {
    if (!err){
        console.log("修改成功~~");
    }
});//fs.rename()可以通过修改具体路径的方式，实现剪贴的功能，但是前提是路径必须在同一个盘下*/

/*
    fs.watchFile(filename[, options][, listener])
        - 监视文件的修改
        - 参数：
            filename 要监视的文件的名字
            options 配置选项

            listener 回调函数，当文件发生变化时，回调函数会执行
                在回调函数中，会有两个参数：
                    curr 当前文件大小
                    prev 修改钱文件状态
                        - 这两个对象都是stats对象
*/
fs.watchFile("hello2.txt",{interval:1000},function (curr,prev) {
    // console.log("文件发生变化~~");//反应有明显延迟
    console.log("修改前文件大小："+ prev.size);
    console.log("修改后文件大小："+ curr.size);
});

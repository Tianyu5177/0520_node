/*
* 1.Node中的文件系统：
*     1.在NodeJs中有一个文件系统，所谓的文件系统，就是对计算机中的文件进行增删改查等操作。
*     2.在NodeJs中，给我们提供了一个模块，叫做fs模块，专门用户操作文件。
*     3.fs模块是Node的核心模块，使用的时候，无需下载，直接引入。
*
* 2.简单文件写入(异步)：
*     fs.writeFile(file, data[, options], callback)
*           --file:要写入的位置+文件名
*           --data：要写入的数据
*           --options：配置对象（可选参数，几乎不用）
*                 --encoding：编码，默认值：utf8
*                 --mode：控制文件的权限，默认值为：0o666
*                       --0o111:文件可被执行的权限(linux)
*                       --0o222:文件可被写入的权限
*                       --0o444:文件可被读取的权限
*                 --flag:打开文件要进行的操作
*                       --'w':直接写入（覆盖原来的数据）
*                       --'a'追加写入（保留原来的数据，追加新的）
*           --callback：回调函数
*                 --err 错误对象，如果有错误，其值为错误对象；如果没有是undefined
*
* 3.在Node中几乎所有的回调函数，都本着一个原则：错误优先
*
* 4.简单文件写入，有弊端：当文件过大的时候，会导致内存溢出，适用于：小文件的频繁写入
*/


//引入fs模块，用于调用文件系统提供的各种API
//let fs = require('fs')

//注意如下写法，不是ES6中的引入模块的方式，是解构赋值!!
let {writeFile} = require('fs')

//简单文件写入操作
writeFile('./0520.txt',',我没带伞',{
  encoding:'utf8',
  mode:0o666,
  flag:'a'
},function (err) {
  if(err){
    console.log(err)
  }else{
    console.log('文件写入成功了')
  }
})





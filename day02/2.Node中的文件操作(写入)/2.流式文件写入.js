/*
* 流式文件写入：
*     流的分类：可读流、可写流
*     fs.createWriteStream(path[, options])
*         --path:写入文件的路径+文件名
*         --options：配置对象（可选）
*
*
* */

let fs = require('fs')

//创建一个可写流
let ws = fs.createWriteStream('./0520.txt')






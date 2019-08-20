/*
* 流式文件读取
*     fs.createReadStream(path[, options])
*       --path:要读取的文件路径+文件名
*       --options：配置对象（可选）
* */

let fs = require('fs')
//创建一个可读流
let rs = fs.createReadStream('./music.mp3')

//给流绑定监听
rs.on('open',function () {
  console.log('可读流打开了')
})
rs.on('close',function () {
  console.log('可读流关闭了')
})

console.log(rs.read(0));

//给可读流绑定一个data事件，会自动触发可读流读取数据
/*
rs.on('data',function (err,data) {
  console.log(1)
})*/

/*
* 流式文件写入：
*     流的分类：可读流、可写流
*     fs.createWriteStream(path[, options])
*         --path:写入文件的路径+文件名
*         --options：配置对象（可选）
*             --flags:打开文件要进行的操作
*                   --'w':直接写入（覆盖原来的数据）
*                   --'a'追加写入（保留原来的数据，追加新的）
*             --encoding:编码，默认值：utf8
*             --fd:文件标识（linux），默认值是：null
*             --mode：控制文件的权限，默认值为：0o666
*                     --0o111:文件可被执行的权限(linux)
*                     --0o222:文件可被写入的权限
*                     --0o444:文件可被读取的权限
*             --autoClose：自动关闭,不是关闭流，而是关闭文件，默认是true
*             --start：写入文件的起始位置
* */

//引入fs模块
let fs = require('fs')

//创建一个可写流
let ws = fs.createWriteStream('./0520.txt',{
  start:10
})

//只要用到了“流”，必须监听流的状态，两种状态：打开、关闭
ws.on('open',function () {
  console.log('可写流打开了')
})
ws.on('close',function () {
  console.log('可写流关闭了')
})

//利用流开始写入文件
ws.write('今天下雨了\n')
ws.write('但是我没带伞\n')
ws.write('还有点饿')
ws.close() //如果是Node8以上（不包含8）的版本，可以使用该方法直接关闭流，如果是8或8以下，用此方法容易产生问题。
//ws.end() //如果是8以8以下的版本，用此方法关闭流






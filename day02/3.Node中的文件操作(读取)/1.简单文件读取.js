/*
* 简单文件读取：
*     fs.readFile(path[, options], callback)
*         --path：要读取的文件路径+文件名
*         --options：配置对象
*               --encoding：编码，默认是utf8
*               --flag:默认值是'r'
*         --callback：回调函数
*               --err:错误对象
*               --data：读取出来的数据
* */

let fs = require('fs')
//简单文件读取
fs.readFile('./music.mp3',{
  flag:'r'
},function (err,data) {
  if(err){
    console.log(err)
  }else{
    //简单文件写入
    fs.writeFile('../test/music2.wav',data,function (err) {
      if(err){
        console.log(err)
      }else{
        console.log('文件写入成功')
      }
    })
  }
})
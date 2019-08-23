/*
* 搭建Node原生服务器,不借助任何第三方的模块
* */

//引入Node内置的http模块
let http = require('http')
//引入Node中内置的querystring，用于把客户端携带过来的查询字符串参数，转成对象
let {parse} = require('querystring')

//创建服务对象
let server = http.createServer(function (request,response) {
  /*
  * request对象：包含着客户端发过来的数据
  * response对象：要交给客户端的数据
  * */
  let stParams = request.url.split('?')[1]
  let objParams = parse(stParams)
  console.log(objParams);
  response.setHeader('content-type','text/html;charset=utf-8')
  response.end(`<h1>你的名字是${objParams.name}，你的年龄是${objParams.age}</h1>`)
})

//绑定一个端口运行
server.listen(3000,function (err) {
  if (err) console.log(err)
  else console.log('服务器启动成功了')
})


let express = require('express')

let app = express()
app.use(express.urlencoded({extended:true}))

app.get('/test_get',(request,response)=>{
  let {callback} = request.query
  let personArr = [{name:'kobe',age:18},{name:'wade',age:19},{name:'peiqi',age:20}]
  console.log('有人请求我的了，发给我的参数是：',request.query);
  response.send(`${callback}(${JSON.stringify(personArr)})`)
})

app.listen(3000,function (err) {
  if (!err) {
    console.log('服务器启动成功，用于验证jsonp解决跨域')
    console.log('必须通过编译器去打开网页！！！！！！')
  }
  else console.log(err)
})
let express = require('express')

let app = express()
app.use(express.static('./public'))
app.use(express.urlencoded({extended:true}))

app.get('/test_get',(request,response)=>{
  console.log('有人请求我的了，发给我的参数是：',request.query);
  response.send('你发来的是GET请求，我是响应的数据')
})

app.post('/test_post',(request,response)=>{
  console.log(request.body);
  response.send('你发来的是POST请求，我是响应的数据')
})


app.listen(3000,function (err) {
  if (!err) {
    console.log('服务器启动成功')
    console.log('测试jQuery封装的Ajax地址：http://localhost:3000/jquery_ajax.html')
    console.log('禁止通过编译器去打开网页！！！！！！')
  }
  else console.log(err)
})
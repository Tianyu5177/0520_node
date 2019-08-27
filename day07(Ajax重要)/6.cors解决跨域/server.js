let express = require('express')

let app = express()
app.use(express.urlencoded({extended:true}))

app.get('/test_get',(request,response)=>{
  response.set('Access-Control-Allow-Origin', 'http://localhost:63342');
  response.send(`你发来的是get请求，我是给你的响应`)
})

app.post('/test_post',(request,response)=>{
  response.set('Access-Control-Allow-Origin', 'http://localhost:63342');
  response.send(`你发来的是post请求，我是给你的响应`)
})

app.listen(3000,function (err) {
  if (!err) {
    console.log('服务器启动成功，用于验证jsonp解决跨域')
    console.log('必须通过编译器去打开网页！！！！！！')
  }
  else console.log(err)
})
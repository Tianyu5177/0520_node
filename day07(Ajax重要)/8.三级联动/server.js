let express = require('express')
let db = require('./db')
let citiesModel = require('./model/citiesModel')

let app = express()

db.then(()=>{

  //查询中国所有省份信息
  app.get('/get_all_province',async(request,response)=>{
    try{
      let result = await citiesModel.find({level:1},{province:1,name:1,_id:0})
      response.set('Access-Control-Allow-Origin', '*');
      response.send({state:1,data:result})
    }
    catch(err){
      response.set('Access-Control-Allow-Origin', '*');
      response.send({state:0,data:'数据请求出错'})
    }
  })

  //查询某省下所有市的信息
  app.get('/get_cities_by_province',async(request,response)=>{
    //获取请求时携带过来的省份编码
    let {province} = request.query
    try{
      let result = await citiesModel.find({level:2,province},{name:1,city:1,_id:0})
      response.set('Access-Control-Allow-Origin', '*');
      response.send({state:1,data:result})
    }
    catch(err){
      response.set('Access-Control-Allow-Origin', '*');
      response.send({state:0,data:'数据请求出错'})
    }
  })

  //查询某省某市下的所有区县信息
  app.get('/get_counties_by_province_and_city',async(request,response)=>{
    //获取请求时携带过来的省份编码
    let {province} = request.query
    let {city} = request.query
    try{
      let result = await citiesModel.find({level:3,province,city})
      response.set('Access-Control-Allow-Origin', '*');
      response.send({state:1,data:result})
    }
    catch(err){
      response.set('Access-Control-Allow-Origin', '*');
      response.send({state:0,data:'数据请求出错'})
    }
  })

}).catch((err)=>{
    console.log(err)
})

app.listen(3000,function (err) {
  if (!err) console.log('服务器启动成功')
  else console.log(err)
})
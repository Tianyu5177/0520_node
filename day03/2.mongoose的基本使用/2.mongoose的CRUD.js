/*
* 如何在Node环境下操作数据库（MongoDB）
* MongoDB ---- 数据库的品牌
* mongod ---- 启动数据库的命令
* mongo ---- 连接数据库的命令
* mongoose ---- 是一个框架(库)，能够帮助编码人员在Node环境下轻松的、稳定、高效的操作MongoDB数据库
* */

//使用mongoose连接MongoDB

//1.引入mongoose
let mongoose = require('mongoose')
mongoose.set('useCreateIndex',true)

//2.指定连接数据库的地址
mongoose.connect('mongodb://127.0.0.1:27017/test',{useNewUrlParser: true})

//交给Promise去管理数据库的连接状态
let dbPromise = new Promise(function (resolve,reject) {
  //3.监听数据库的连接状态
  mongoose.connection.on('open',function (err) {
    if(!err){
      resolve()
      console.log('数据库连接成功了')
    }else{
      reject(err)
      console.log(err)
    }
  })
})


;(async()=>{
  //等待数据库连接成功
  await dbPromise

  //1.请来一个“保安”，帮助你“看门”   -----------   引入模式对象
  let Schema = mongoose.Schema

  //2.制定进入你家的“规则” ---------------  实例化约束
  let stuSchema = new Schema({
    stu_id:{
      type:String,//类型只能是字符串
      unique:true,//唯一
      required:true//必填
    },
    name:{
      type:String,
      required:true
    },
    age:{
      type:Number,
      required:true
    },
    sex:{
      type:String,
      required:true
    },
    info:Schema.Types.Mixed, //可以接受所有类型
    hobby:[String],
    date:{
      type:Date,
      default:Date.now(),
    },
    enable_flag:{
      type:String,
      default:'Y'
    }
  })

  //3.把你的规则告诉保安 ------------  构建模型对象
  let stuModel = mongoose.model('students2',stuSchema) //第一个参数就是数据库中集合的名字，第二个参数是“规则”
  //模型对象身上有着所有CRUD的API

  //添加一条数据
  stuModel.create({
    stu_id:'20190821004',
    name:'老刘',
    age:92,
    sex:'男',
    info:222222,
    hobby:['女','吃饭','抽烟','烫头'],
  },function (err,data) {
    if(!err){
      console.log('数据写入成功',data)
    }else{
      console.log(err)
    }
  })
})()











/*
* 该模块用于：创建cities模型
* */
let mongoose = require('mongoose')

//1.请来一个“保安”，帮助你“看门”   -----------  引入模式对象
let Schema = mongoose.Schema

//2.制定进入你家的“规则” ---------------  实例化约束
let citiesSchema = new Schema()

//3.把你的规则告诉保安 ------------  构建模型对象
let citiesModel = mongoose.model('cities',citiesSchema) //第一个参数就是数据库中集合的名字，第二个参数是“规则”
//模型对象身上有着所有CRUD的API

module.exports = citiesModel
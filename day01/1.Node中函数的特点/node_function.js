/*
* 1.Node中任何一个模块（js文件）都被一个外层函数所包裹
*   function (exports, require, module, __filename, __dirname) { 函数体（由编码人员决定）}
*       --exports：用于暴露模块
*       --require：用于引入模块
*       --module：用于暴露模块tr
*       --__filename：当前文件所在路径(绝对路径)+当前文件名
*       --__dirname：当前文件所在文件夹的路径
*
* 2.为什么要有这个外层函数（这个外层函数有什么作用？）
*   1.隐藏内部实现
*   2.用于支持CommonJs模块化语法
* */

//这里输出的是那个“外层函数”
console.log(arguments.callee.toString())
console.log(__filename)
console.log(__dirname)


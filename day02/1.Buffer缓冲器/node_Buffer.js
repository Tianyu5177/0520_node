/*
* 1.Buffer是什么？
*    1.它是一个【类似于数组】的对象，用于存储数据（存储的是二进制数据）。
*    2.Buffer的效率很高，存储和读取很快，它是直接对计算机的内存进行操作。
*    3.Buffer的大小一旦确定了，不可修改。
*    4.每个元素占用内存的大小为1字节。
*    5.Buffer是Node中的非常核心的模块，无需下载、无需引入,直接即可使用
*
* 2. 进制转化
*       十六进制：00 ----- ff
*       十进制：0 ----- 255
*       二进制：0000000 ------ 11111111
*
* 3.内存单位的换算
*       8位(bit)  = 1字节(Byte)
*       1024Byte = 1KB
*       1024Kb = 1Mb
*       1024Mb = 1Gb
*       ...
*
* */

//1.使用new关键字创建了一个Buffer实例 ---- 即将被废弃，效率极低
let buf1 = new Buffer(10)
console.log(buf1)

//2.使用Buffer.alloc()创建一个Buffer实例 ---- 效率稍高，比new关键字创建要高
let buf2 = Buffer.alloc(10)
console.log(buf2)

//3.使用Buffer.allocUnsafe(),创建一个Buffer实例 --- 效率最高，但是不安全
let buf3 = Buffer.allocUnsafe(10)
console.log(buf3.toString())

//4.Buffer.from(),创建一个Buffer实例，随后将一些数据保存到该实例中
let str = 'HELLO ATGUIGU'
let buf4 = Buffer.from(str)
console.log(buf4)

//存储的是二进制，但是如果在控制台输出，转成了16进制，目的是为了便于观察
//

    // 1.Buffer是一个和数组类似的对象,不同的是Buffer是用来存储数据的(存储的是二进制数据)
    // 2.Buffer的效率很高,存储和读取很快,它直接对计算机的内存操作
    // 3.每个元素占用的内存大小为1字节
    // 4.Buffer的大小一旦确认,就不可更改了
    // 5.Buffer是Node非常核心的模块,无需下载，无需引入，直接使用即可
    

    // 创建一个Buffer实例对象,但Buffer有性能和安全问题(性能特别差) 
        // 此时会在堆内存随机位置开辟一块空间,无论该空间是否有数据,然后对该空间进行清扫，所以有性能和安全问题
        let buf = new Buffer(10); //10字节大小
        console.log(buf)


    //创建一个Buffer实例对象(Buffer创建)(性能比new Buffer稍微轻一点)
        // 此时会在堆内存空白内存位置开辟一块空间,回避了有数据的内存空间,因为空白数据所以不用清扫，因此性能和安全问题比new Buffer好一些
        let buf2 =Buffer.alloc(10)
        console.log(buf2)


    //创建一个Buffer实例对象(Buffer创建)(性能最好的但安全性不敢苟同(会将数据二进制暴露出来))
        // 此时会在堆内存位置开辟一块空间,无论是否有数据，但不进行清扫，因此性能和安全问题比new Buffer好一些
        //?? 1.输出的Buffer里面有大于1的,不是二进制
                // 输出自动转换16进制,但存储的是二进制
        //?? 2.输出的Buffer不为空
                // 在堆内存位置开辟一块空间,无论是否有数据，但不进行清扫,所以可能残留其他数据
       let buf3= Buffer.allocUnsafe(10)
       console.log(buf3)




    //    将数据存入一个Buffer实例
       let buf4=Buffer.from('shili')
       console.log(buf4.toString())




    //计算机进制 asc码换算
    var a16 = 68 //16进制

    //    16=>10    
    parseInt(a16, 16) //104

    // 10=>asc 
    var asc = String.fromCharCode(parseInt(a16, 16))

    // asc=>10
    asc.charCodeAt() //104

    // 10=>16
    Number(asc.charCodeAt().toString(16)) //68


    // 计算机单位换算
    // 8位(bit) = 1 字节(Byte)
    // 1024Byte = 1kb
    // 1024kb = 1Mb
    // 1024mb = 1gb
module.exports = {
    entry: { //入口文件
        bundle: __dirname + '/src/sourceFile.js'
    },
    //输出文件
    //__dirname 代表当前目录,Node.js会去识别
    //entry中，是指入口文件的配置项，它是一个数组的原因是webpack允许多个入口点。值为一个路径，代表源文件的存放位置。键，则可以随便取，在我的配置中，编译后文件的名字就是这里的键。
    //output是指输出文件的配置项，path为编译后的文件存放的文件夹。 filename 为编译后文件夹名字。 其中[name]代表了entry中的键。也就是说上面是什么名字，编译后就是什么名字。

    output: {
        path: __dirname + '/dist',//输出文件路径
        filename: '[name].js'//输出文件名
    }
}


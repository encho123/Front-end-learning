//引入path模块
const path = require('path');
//引入test-plugin
const testplugin = require('./test-plugin');

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        //清理dist文件夹
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: "./clean-log-loader"
            }
        ]
    },
    //设置mode
    mode: 'development',
    //设置source-map
    devtool: 'source-map',
    //引入插件
    plugins: [
        new testplugin()
    ]
}
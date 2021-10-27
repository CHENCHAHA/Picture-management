/* const { response, request } = require('express'); */
const express = require('express');
const path = require('path');
const formidable = require('formidable');
//创建应用对象n
const app = express();
app.use(express.static(path.join(__dirname, 'public')))
    //创建路由规则
app.get('/server', (request, response) => {
        //设置响应头,设置允许跨域
        response.setHeader('Access-Control-Allow-Origin', '*');
        //设置响应体
        response.send('这是服务端的数据');
    })
    //实现文件上传
app.post('/upload', (request, response) => {
        const from = new formidable.IncomingForm();
        formidable.uploadDir = path.join(__dirname, 'public', 'uploads');
        formidable.parsers(request, (err, fields, files) => {
            /* response.send(fields); */
            response.send('ok');
        })



    })
    //监听端口启动服务
app.listen(8000, () => {
    console.log("服务已经启动,8000端口监听中......");
})
/**
 * Created by wang on 2018/4/16.
 */
const express=require('express');
const http=require('http');
const bodyParser=require('body-parser');
//注意自己建的模块的引入方式
const pool=require('./pool.js');
//创建服务器
var app=express();
var server=http.createServer(app);
server.listen(8081);
app.get("/carousel",(reg,res)=>{
    //从前端获取到图片组的标号
    var pgId=1;
    var sql="SELECT * FROM  `carousel` where pgid= ? ";
    pool.getConnection((err,conn)=>{
        if(err){
            throw new Error;
        }else {
            conn.query(sql,[pgId],(err, result)=> {
                if (err) {
                    throw new Error;
                }else {
                    res.json(result);
                }
                conn.release();
            })
        }
    })
})
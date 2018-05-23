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
server.listen(5000);
//跨域
app.all('*',function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE,OPTIONS');
    if (req.method == 'OPTIONS') {
        res.send(200);
    } else {
        next();
    }
});
//导航
app.get("/carousel",(reg,res)=>{
    //从前端获取到图片组的标号
    var pgId=reg.query.pgid;
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
});
//首页
app.get('/indexList',(reg,res)=>{
    var indexListId=reg.query.indexListId;
    var sql="SELECT *  FROM  `index_pic` WHERE  `group` = ?";
    pool.getConnection((err,conn)=>{
        if(err){
            throw new Error;
        }else {
            conn.query(sql,[indexListId],(err, result)=> {
                if (err) {
                    throw new Error;
                }else {
                    res.json(result);
                }
                conn.release();
            })
        }
    })
});
//分类
app.get('/indexDivided',(req,res)=>{
    var sql="SELECT *  FROM  `divided_index`";
    pool.getConnection((err,conn)=>{
        if(err){
            throw new Error;
        }else {
            conn.query(sql,(err, result)=> {
                if (err) {
                    throw new Error;
                }else {
                    res.json(result);
                }
                conn.release();
            })
        }
    })
});
//详情
app.get('/indexDetail',(req,res)=>{
    var detailId=req.query.detailId;
    var detail={detailId:detailId,banner:[],};
    var sql="SELECT  `src` FROM  `detail_carousel` WHERE  `detail_id` = ?";
    pool.getConnection((err,conn)=>{
        if(err){
            throw new Error;
        }else {
            conn.query(sql,[detailId],(err, result)=> {
                if (err) {
                    throw new Error;
                }else {
                    detail.banner=result;
                    res.json(detail);
                }
                conn.release();
            })
        }
    })
})
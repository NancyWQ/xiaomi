/**
 * Created by wang on 2018/4/16.
 */
const express=require('express');
const http=require('http');
const bodyParser=require('body-parser');
//ע���Լ�����ģ������뷽ʽ
const pool=require('./pool.js');
//����������
var app=express();
var server=http.createServer(app);
server.listen(8081);
app.get("/carousel",(reg,res)=>{
    //��ǰ�˻�ȡ��ͼƬ��ı��
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
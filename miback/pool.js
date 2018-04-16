/**
 * Created by wang on 2018/4/16.
 */
const mysql=require('mysql');
const pool = mysql.createPool({
    host : '127.0.0.1',
    port : 3306,
    database : 'xiaomi',
    user : 'root',
    password : 'root',
});


const express = require("express");
const app = express();
const router = require("./router/router.js");
const bodyparser = require("body-parser");
const ejs = require("ejs");

const session = require("express-session"); 
const session_mysql_save = require("express-mysql-session");

const path = require('path');

var parseurl = require('parseurl');


let db_info = {
    host : 'project-db-stu.ddns.net', 
    user : 'campus_g_0325_5',
    password : 'smhrd5',
    port : '3307',
    database : 'campus_g_0325_5'
}

let s_m_s = new session_mysql_save(db_info);

app.use(express.static("./public"));

app.set("view engine","ejs")
app.use(session({
    secret : "smart",
    resave : false,
    saveUninitialized : true,
    store : s_m_s
}))

app.use(bodyparser.urlencoded({extended:false}));
app.use(router);
app.listen(3000);

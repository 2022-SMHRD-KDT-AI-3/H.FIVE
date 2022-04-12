const express = require("express");
const app = express();
const router = require("./router/router.js");


// session기능 저장하기위한 모듈(mysql)
const session_mysql_save = require("express-mysql-session");
const session = require("express-session"); 

var parseurl = require('parseurl');



app.use(session({
    secret:'keyboard cat',
    resave: false,
    saveUninitialized: true
}));

app.get('/',function(req,res){
    session = req.session;
});





const ejs = require("ejs");



let DB_info = {
    host : '127.0.0.1',
    user : 'root',
    password : '1234',
    port : '3306',
    database : 'nodejs'
}
let s_m_s = new session_mysql_save(DB_info);

app.use(express.static("./public"));   //현재 프로젝트에 정적파일 폴더 지정
// 템플릿 가져올 때 변환순서
//1. index.html --> 확장자 .ejs로 변경
//2. express 프로젝트에 views 폴더로 이동
//3. 해당 css/javescript/images파일들을 public폴더로 이동
//4. app.js에서 app.use(express.static("./public")); 정적파일 폴더지정
//5. 라우터에서 response.render로 ejs파일 생성



app.set("view engine","ejs");  //ejs미들웨어 등록
app.use(session({
    secret : "smart",
    resave : false,
    saveUninitialized : true,
    store : s_m_s
}))
const bodyparser = require("body-parser"); //post 방식
const { urlencoded } = require("express");

app.set("view engine", "ejs");
app.use(bodyparser.urlencoded({extended:false}));
app.use(router);
app.listen(3000);
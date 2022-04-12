const mysql = require("mysql");
//  mysql 프로그램을 가져오는게 아니라 
// 프로그램과 연결할 수 있는 mysql 모듈을 가져옴 (npm install)

 //지도 api 키값 config 폴더에 저장

 // mySQL 연결
let conn = mysql.createConnection({ // 데이터베이스 연결   //아래의 정보만 바꾸고 사용하기
    host : 'project-db-stu.ddns.net',
    user : 'campus_g_0325_5',
    password : 'smhrd5',
    port : '3307',
    database : 'campus_g_0325_5'
});

conn.connect();

module.exports = conn;
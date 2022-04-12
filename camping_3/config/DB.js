
const mysql = require("mysql");
// mysql프로그램을 가져오는게 아니라,
// mysql프로그램과 연결할 수 있는 mysql모듈

//mysql연결
let conn = mysql.createConnection({
    host: 'project-db-stu.ddns.net',
    user: 'campus_g_0325_5',
    password: 'smhrd5',
    port: '3307',
    database: 'campus_g_0325_5'
})
conn.connect();

module.exports = conn;

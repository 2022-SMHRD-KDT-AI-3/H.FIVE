const { request } = require("express");
const express = require("express");
const res = require("express/lib/response");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const conn = require("../config/DB.js");
// 3000 ejs, router
// 5500 html

//----------------------PAGE 불러오기---------------------
router.get("/main", function (request, response) {

  response.render("main(index)", {
    user: request.session.user
  })

})

router.get("/community", function (request, response) {

  response.render("community", {
    user: request.session.user
  })

})

router.get("/C_review", function (request, response) {

  response.render("C_review", {
    user: request.session.user
  })

})

router.get("/C_write", function (request, response) {

  response.render("C_write", {
    user: request.session.user
  })

})

router.get("/Sign_up", function (request, response) {

  response.render("Join", {
    user: request.session.user
  })

})

router.get("/Login_page", function (request, response) {

  response.render("Login", {
    user: request.session.user
  })

})

router.get("/C_edit", function (request, response) {

  response.render("C_edit", {
    user: request.session.user
  })

})

router.get("/C_edit", function (request, response) {

  response.render("C_edit", {
    user: request.session.user
  })

})

router.get("/campingtip_a", function (request, response) {

  response.render("campingtip_a", {
    user: request.session.user
  })

})

router.get("/mypage", function (request, response) {

  response.render("mypage", {
    user: request.session.user
  })

})



//---------------- 회원가입, 로그인--------------------------

router.post("/login", function (request, response) {

  let id = request.body.id
  let pass = request.body.pass

  let sql = "select * from campus_g_0325_5.user_info where id = ? and password = ?";

  conn.query(sql, [id, pass], function (err, rows) {
    console.log(rows.length);
    if (rows.length > 0) {
      request.session.user = {
        "id": rows[0].id,
        "pass": rows[0].password
      }
      response.redirect("http://127.0.0.1:3000/main")
    } else {
      response.redirect("http://127.0.0.1:3000/Sign-up")
    }
  })

})

router.get("/logout", function (request, response) {

  delete request.session.user;
  response.redirect("http://127.0.0.1:3000/main")

})

router.post("/join", function (request, response) {

  let id = request.body.id
  let pass = request.body.pass
  let nick = request.body.nick
  let email = request.body.email

  let sql = "insert into campus_g_0325_5.user_info value (?,?,?,?)";

  conn.query(sql, [id, pass, nick, email], function (err, rows) {
    if (rows) {
      response.redirect("http://127.0.0.1:3000/main");
    } else {
      console.log(err);
    }
  })

})






//---------------DIARY 저장 ROUTER----------------------

router.get("/D_main", function (request, response) {

  
  let sql = "select * from diary ";
  
  conn.query(sql,function(err,rows){
    
    if(rows){
    response.render("./D_main.ejs",{
      rows:rows,
      user: request.session.user
    })
    }
   
  })

})

var upload = multer({ dest: 'uploads/' })

var storage = multer.diskStorage({

  destination: function (req, file, cb) {
    cb(null, 'uploads/') // cb 콜백함수를 통해 전송된 파일 저장 디렉토리 설정
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname) // cb 콜백함수를 통해 전송된 파일 이름 설정
  }
  
})

var upload = multer({ storage: storage })

router.post("/uploads", upload.single("userFile"), function (request, response) {

  console.log(upload);
  console.log(request.file);

  let title = request.body.title;
  console.log("TestTitle" + title);
  const img = request.file;
  let testName = img.filename;
  console.log("test" + testName);

  let filename = testName;
  let content = request.body.content;
  
  let id = request.session.user.id;

  let sql = "insert into diary values (null,?,?,?,?)";

  conn.query(sql, [id, title, filename, content], function (err, rows) {

  })

  let sql2 = "select * from diary ";
  conn.query(sql2,function(err,rows){
    if(rows){
      response.render("/D_main",{
        rows:rows,
        user: request.session.user
        
      })
    }
  })
  response.redirect("http://127.0.0.1:3000/D_main")
})




//----------------지도 ROUTER---------------------------------
router.get("/search", function(request, response){ 

  let sql = "select * from camping";

  conn.query(sql,function(err, rows){
         response.render("search", {
          user: request.session.user,
          rows : rows
         })
  })

})

router.get("/choice", function(request, response){

  let place = request.param('local');
  let category = request.param('category');
  let who = request.param('who');

  console.log("선택한 지역"+place);
  console.log("선택한 유형"+category);
  console.log("선택한 사람"+who);
  
  let sql = "select * from camping where address like '%"+place+"%'and category like '%"+category+"%' and who like '%"+who+"%'"

  conn.query(sql,function(err, rows){
    response.json(rows);
  })

})

router.get("/camp_info", function(request, response){

  let sql = "select * from camping,campImg";

  conn.query(sql,function(err, rows){
    response.render("camp_info", {
      user: request.session.user,
      rows : rows
    })
  })

})



// ------------------- 자유 게시판 ---------------------


router.get('/list', function (req, res, next) {
  console.log("라우터실행");
  
  let fb_tatle = req.body.fb_tatle;
  let fb_id = req.body.fb_id;
  
  let fb_write = req.body.fb_write


  var page = req.params.page;
  let sql = "insert into campus_g_0325_5.freeBoard values (null, ?, ?, ?) ";
  conn.query(sql, [ fb_id, fb_write, fb_tatle], function (err, rows) {
    if (err) {
      console.error("err : " + err);
      res.render('list', { title: '게시판조회', rows: rows });
    }else{
      console.log("오류");
    }
  });
  res.render("C_review", {
        user: req.session.user
      })
});

router.post('/listin', function (req, res, next) {
  console.log("라우터실행");
  
  let fb_tatle = req.body.fb_tatle;
  let fb_id = req.body.fb_id;
  
  let fb_write = req.body.fb_write


  var page = req.params.page;
  let sql = "insert into campus_g_0325_5.freeBoard values (null, ?, ?, ?) ";
  conn.query(sql, [ fb_id, fb_write, fb_tatle], function (err, rows) {
    if (err) {
      console.error("err : " + err);
      res.render('list', { title: '게시판조회', rows: rows });
    }else{
      console.log("오류");
    }
  });
  res.render("C_review", {
        user: req.session.user
      })
});


//--------------------닫기---------------------
module.exports = router;
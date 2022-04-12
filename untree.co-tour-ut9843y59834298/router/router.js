const express =  require("express");
const router = express.Router();

const conn = require("../config/DB.js");



router.get("/search",function(request,response){
    response.render("연습",{});
    //ejs파일생성
    //ejs파일은 response통해서 생성(HTMLX)

});

app.set("view engin", "ejs");



module.exports = router;
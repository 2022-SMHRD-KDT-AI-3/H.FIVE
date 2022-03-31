const { Router } = require("express");
const express =  require("express");
const router = express.Router();

router.get("/sessionSave",function(request,response){
    request.session.user = {
        "name" : "Jason",
        "age" : "99"
    }
    console.log("세션등록성공!");
    response.end();


})

router.get("/sessionLoad",function(request,response){
    console.log("세션에 저장된 이름값 : " +request.session.user.name);
    console.log("세션에 저장된 이름값 : " +request.session.user.age);
    response.end();


})

router.get("/sessionDelete",function(request,response){
    delete request.session.user;

    console.log("세션삭제성공");
    response.end();


})
module.exports = router;




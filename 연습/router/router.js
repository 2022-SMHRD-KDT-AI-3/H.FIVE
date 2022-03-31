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
module.exports = router;
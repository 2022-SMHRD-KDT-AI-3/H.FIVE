const express =  require("express");

const Router = express.Router();

Router.get("/review",function( request, response){

    console.log("사용자가 보낸 색상 : " + request.query.color);

    // 위에 사용자가 보내준 색상 값으로 응당하는 페이지에 배경색을 변경
    response.writeHead(200, {"Content-Type" : "text/html;charset=utf-8"});
    response.write("<html>");
    response.write("<body>");
    
    response.write("</body>")
    response.write("</html>");
    response.end();

})


Router.post("/move",function( request, response){
console.log("post라우터 호출 성공 : ");

    // response.redirect("http://www.naver.com");   외부페이지로이동
   // response.redirect("http://127.0.0.1:5501/0321express/public/ex01.html")
    if(request.body.site =='naver'){
        response.redirect("http://www.naver.com")
    }
    else if(request.body.site =='google'){
        response.redirect("http://www.google.com")
    }
    else if(request.body.site =='daum'){
        response.redirect("http://www.daum.net")
    }


    response.end();
})

Router.post("/join",function( request, response){
    response.writeHead(200, {"Content-Type" : "text/html;charset=utf-8"});
    response.write("<html>");
    response.write("<body>");
    response.write(`ID : ${request.body.id}<br>`)
    response.write(`이름 : ${request.body.name}<br>`)
    response.write(`이메일 : ${request.body.email}<br>`)
    response.write(`전화번호 : ${request.body.tel}<br>"`)
    response.write(`성별 : ${request.body.gender}<br>"`)
    response.write(`취미 : ${request.body.hobby}<br>"`)
    response.write(`생년월일 : ${request.body.birthday}<br>"`)
    response.write(`색깔 : ${request.body.color}<br>"`)
    response.write(`국적 : ${request.body.country}<br>"`)
    response.write(`메모 : ${request.body.talk}`)

    response.write("</body>");
    response.write("</html>");
    response.end();
    
        response.end();
    })




Router.post("/post",function( request, response){
    console.log("post라우터 호출 성공 : ");
        console.log("사용자가 보낸 ID : " + request.body.ID);
        console.log("사용자가 보낸 Password :  " + request.body.pw);
        console.log("사용자가 보낸 HOBBY : " + request.body.hobby);
        console.log("사용자가 보낸 GENDER : " + request.body.gender);
    
        response.end();
    })
    module.exports = Router;   // 외부에서 router정보를 사용할 수 있게 해주는 코드
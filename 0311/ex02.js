const http =  require("http");
const url = require("url");

http.createServer(function(request, response){

console.log(request.url);
// /?num1=123&num2=123
//   num1(name값) 123=(value 값)
// ? 는 시작하겠다라는 의미
//  QueryString : URL을 통해서 서버로 값을 보내는 방식

let query = url.parse(request.url, true).query;
console.log(query);
console.log("사용자가 입력한 num1값 : " + query.num1);
console.log("사용자가 입력한 num2값 : " + query.num2);
console.log("num1과 num2의 합 : " + (parseInt(query.num1) + parseInt(query.num2)));

    console.log("서버생성성공");

    response.writeHead(200, {"Content-Type" : "text/html;charset=utf-8"});
    response.write("<html>");
    response.write("<body>");
    // query.opr을 통해서 사용자가 원하는 연산을 출력하시오(if)
    if(query.opr=="+"){
        response.write("num1과 num2의 합 : " + (parseInt(query.num1) + parseInt(query.num2)));
    }
    else if(query.opr=="-"){
        response.write("num1과 num2의 차 : " + (parseInt(query.num1) - parseInt(query.num2)));
    }
    else if(query.opr=="*"){
        response.write("num1과 num2의 곱 : " + (parseInt(query.num1) * parseInt(query.num2)));
    }
    else if(query.opr == "/"){
        response.write("num1과 num2의 몫 : " + (parseInt(query.num1) / parseInt(query.num2)));
    }
    response.write("</body>");
    response.write("</html>");
    response.end();

}).listen(3000);
const http =  require("http");

http.createServer(function(request, response){

    console.log("서버생성성공");

}).listen(3000);
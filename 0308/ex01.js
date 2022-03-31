console.log("Node동작성공")

//모듈 : Nodejs에서 만들어논 기능들의 단위
const http = require("http")
// require : 모듈을 가져오는 명령어
// http모듈 : 현재 파일을 서버로 만어주는 모듈

http.createServer(function(request, response){

    console.log("서버실행중");

    let ip = request.connection.remoteAddress;

    let ip_res = ip.substring(7);

    console.log("접근한 Client의 IP : " + ip_res);

    response.writeHead(200, {"Content-Type" : "text/html;charset=utf-8"});
    //패킷(Header/Body), writeHead:패킷에 Header값을 지정
    //response : Server가 Client에게 응답을 해주는 객체
    //              (html페이지생성/페이지이동)
    response.write("<html>");
    response.write("<body>");
    response.write("환영합니다");
    response.write("당신의 IP : " +ip_res);
    response.write("</body>");
    response.write("</html>");
    response.end();


}).listen(3000);
//listen : port번호설정(방번호)
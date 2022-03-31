const http =  require("http");
const url = require("url");
const temp = require("./ex03Temp.js");

http.createServer(function(request, response){

    let query = url.parse(request.url, true).query;
    
    response.writeHead(200, {"Content-Type" : "text/html;charset=utf-8"});
    
    let res = temp.template_grade(query);
    
    response.write(res);

    response.end();
    
}).listen(3000);
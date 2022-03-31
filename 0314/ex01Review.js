const { table } = require("console");
const http =  require("http");
const url = require("url");

let temp =  require("./ex03Temp.js")

http.createServer(function(request, response){

    let query = url.parse(request.url, true).query;
    let res = temp.template(query);

    response.writeHead(200, {"Content-Type" : "text/html;charset=utf-8"});
    
    response.write(res);

    response.end();

}).listen(3000);
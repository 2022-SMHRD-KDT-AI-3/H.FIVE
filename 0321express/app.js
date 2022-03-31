const express =  require("express");

const app = express();

const bodyparser = require("body-parser");          //포스트전송

const Router = require("./router/router.js")

app.use(bodyparser.urlencoded({extended:false}));






app.use(Router);

app.listen(3000);
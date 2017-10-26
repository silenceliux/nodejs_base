var http = require("http");
var fs  = require("fs");
var events = require('events');
var url = require("url");
var eventEmitter = new events.EventEmitter();
function start(route){
    http.createServer(function(req, res){
        var pathname = url.parse(req.url).pathname;
        console.log("serve9"+pathname);
        route(pathname);
        res.writeHead(200,{'Content-Type':"text/plain"});
        res.end("hello world");
    }).listen(8080);
    console.log("Server has started.");
}
exports.start = start;



//事件
//eventEmitter.on("register",function(){//注册事件
//    console.log("success");
//});
//eventEmitter.emit("register");//调用事件

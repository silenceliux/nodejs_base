var http = require("http");
var fs  = require("fs");
var events = require('events');
var eventEmitter = new events.EventEmitter();
http.createServer(function(req, res){
    res.writeHead(200,{'Content-Type':"text/plain"});
    res.end("hello world");
}).listen(8080);

var data = fs.readFileSync("input.txt");//同步
console.log(data);//输出buffer值
console.log(data.toString());
fs.readFile('input.txt',function(err, data){//异步
    if(err) return console.error(err);
    console.log(data.toString());
});
eventEmitter.on("register",function(){//注册事件
    console.log("success");
});
eventEmitter.emit("register");//调用事件


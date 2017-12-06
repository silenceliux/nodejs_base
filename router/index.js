var server = require("./server");
var router = require("./router");

var result= server.start(router.route);
console.log(result);
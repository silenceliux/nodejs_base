var fs  = require("fs");

//读取流
var data = fs.readFileSync("input.txt");//同步
console.log(data);//输出buffer值
console.log(data.toString());
fs.readFile('input.txt',function(err, data){//异步
    if(err) return console.error(err);
    console.log(data.toString());
});
//写入流
var writerStream = fs.createWriteStream('output.txt');
for(var i=0;i<100;i++){
    //var data = i;
    writerStream.write(i+"\n",'UTF8');
}

//writerStream.end();
writerStream.on('finish', function() {
    console.log("写入完成。");
});

writerStream.on('error', function(err){
    console.log(err.stack);
});


var fs  = require("fs");

//��ȡ��
var data = fs.readFileSync("input.txt");//ͬ��
console.log(data);//���bufferֵ
console.log(data.toString());
fs.readFile('input.txt',function(err, data){//�첽
    if(err) return console.error(err);
    console.log(data.toString());
});
//д����
var writerStream = fs.createWriteStream('output.txt');
for(var i=0;i<100;i++){
    //var data = i;
    writerStream.write(i+"\n",'UTF8');
}

//writerStream.end();
writerStream.on('finish', function() {
    console.log("д����ɡ�");
});

writerStream.on('error', function(err){
    console.log(err.stack);
});


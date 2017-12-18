var xlsx = require("node-xlsx");
var fs = require("fs");
var obj = xlsx.parse("./2.xlsx");
var excelObj = obj[0].data;
var data = [];
//for in 会去除空的， for length原样写入
for(var  i=0;i< excelObj.length;i++){
//for(var i in excelObj){
    var arr=[];
    var value=excelObj[i];
    for(var j= 0;j<value.length;j++){
    //for(var j in value){
        arr.push(value[j]);
    }
    data.push(arr);
}

//fs.writeFileSync('./test1.xlsx',buffer,{'flag':'w'});



var blankWriteData = [];
for(var i=0;i<10;i++){
    var line = [];
    for(var j= 0;j<10;j++){
        var z=i+j;
        line.push(z);
    }
    blankWriteData.push(line);
}

var buffer = xlsx.build([
    {
        name:'sheet1',
        data:data
    },
    {
        name:'sheet2',
        data:blankWriteData
    }
]);
fs.writeFileSync('./test1.xlsx', buffer,{'flag':'w'});
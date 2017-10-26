var xlsx = require("node-xlsx");
var fs = require("fs");
var obj = xlsx.parse("./2.xlsx");
var excelObj = obj[0].data;
var data = [];
//for in 会去除空的， for length原样写入
for(var i in excelObj){
    console.log(i);
    var arr=[];
    var value=excelObj[i];
    for(var j= 0;j<value.length;j++){
        console.log(j);
        arr.push(value[j]);
    }
    data.push(arr);
}
var buffer = xlsx.build([
    {
        name:'sheet1',
        data:data
    }
]);
fs.writeFileSync('./test1.xlsx',buffer,{'flag':'w'});
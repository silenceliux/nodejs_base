var http = require('http');
var express  =require("express");
//var proxy   =require("http-proxy-middleware");
//var app = express();
//app.use("/test",proxy({
//        target: "http://127.0.0.1:9000",
//        changeOrigin: true
//    })
//)
//var mysql      = require('mysql');
//var connection = mysql.createConnection({
//    host     : 'rm-bp1w72suk8pc5h6mk.mysql.rds.aliyuncs.com',
//    user     : 'r85u40z94p',
//    password : 'Mafeng11',
//    database: 'r85u40z94p'
//});
//��ʼ���mysql����
//connection.connect();

var server = http.createServer(function (req, res) {
    //����㷢һ��GET��http://127.0.0.1:9000/test
    var url_info = require('url').parse(req.url, true);
    //����ǲ��Ǹ�/test��request
    if(url_info.pathname === '/test'){
        res.writeHead(200, {'Content-Type': 'application/json;charset=UTF-8'});
        //res.writeHead(200, {'Content-Type': 'text/plain'});


        //connection.query('SELECT * FROM `r85u40z94p`.`user`  order by rand()  LIMIT 5',function(err,rows,fields){
        //    //������Ľ��
        //    // res.end(rows.constructor);
        //    // ������
        //    res.end(JSON.stringify(rows));
        //
        //    console.log(rows.constructor);
        //    console.log(typeof(rows));
        //    res.end(rows.join);
        //    console.log(err);
        //    console.log(fields);
        //});
        var let  = JSON.stringify({data:[1,2,3,4,5]})
        res.end(let);
    }
    //����������ظ������Ǹ�post�ģ���ʾpost�������Ա�ʾ�ɹ��ˡ���Ҫ���б��Ŀ�꣬��Ȼ����Ҫ��һ�Ρ�
    else{
        req.pipe(res);
    }
});
server.listen(9000, '127.0.0.1');
//��server�رյ�ʱ��Ҳ�ر�mysql����
//server.on('close',function(){
//    connection.end();
//});
console.log('listening on port  9000');
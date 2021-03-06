var express =require('express');
var app=express();

app.use(express.static(__dirname + '/public'));


app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/date',function(req,res)
{
   var today = new Date();
   var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate(); 
   res.send("Date:"+date);
});

app.get('/time', function(req,res){
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    res.send("Time:"+time);
});


app.listen(3000,function(){
    console.log('server listening to port 3000');
});







/*const http = require('http');
var fs = require('fs');
var index = fs.readFileSync('index.html');


const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(index);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
*/



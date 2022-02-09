var http=require('http')

var server=http.createServer((req,res)=>{
    res.write(`<h1>My First Letter from node js</h1>`);
    res.end();
})

server.listen(9920);
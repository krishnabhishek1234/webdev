const http=require('http');

const server=http.createServer((req,res)=>{
    // console.log(req.url)
    if(req.url == '/about'){
        res.end("This is about")
    }
    if(req.url == '/profile'){
        res.end('Hello World')
    }
    if(req.url == '/'){
        res.end("This is home page");
    }
})

server.listen(3000);
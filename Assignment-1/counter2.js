const express = require('express');
const app = express();
const Port = 3000;
const hostname = 'localhost';
let counter = 0
app.get("/",(req,res)=>{
    res.json(`{counet:${counter}}`);
})
app.get('/increment',(req,res)=>{
    counter++;
    res.json(`{counet:${counter}}`);
});
app.get('/decrement',(req,res)=>{
    counter--;
    res.json(`{counet:${counter}}`);
});

app.listen(Port,()=>{
    console.log(`server is runing at ${hostname}:${Port}`);
});

// const http = require('http');
// const Port = 3000;
// const hostname = 'localhost';
// let counter = 0
// const server = http.createServer((req,res)=>{
//     if(req.url==="/"){
//         res.end(`{counet:${counter}}`);
//     }
//     else if(req.url==="/increment"){
//         counter++;
//         res.end(`{counet:${counter}}`);
//     }
//     else if(req.url==="/decrement"){
//         counter--
//         res.end(`{counet:${--counter}}`);
//     }
// });
// server.listen(Port,()=>{
//     console.log(`server is running at ${hostname}:${Port}`);
// })
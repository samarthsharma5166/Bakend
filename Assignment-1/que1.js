const http = require('http');
const Port = 3000;
const hostname = 'localhost';
const men =[
    {
        id:'1',
        name:"Men's T-Shirt",
        brand:"AB",
        price:400,
        color:"blue",
        size:"M",
        category:"clothing"
    },  
    {
        id:'2',
        name:"Men's T-Shirt",
        brand:"AB",
        price:400,
        color:"blue",
        size:"M",
        category:"clothing"
    },  
    {
        id:'3',
        name:"Men's T-Shirt",
        brand:"AB",
        price:400,
        color:"blue",
        size:"M",
        category:"clothing"
    },  
    {
        id:'4',
        name:"Men's T-Shirt",
        brand:"AB",
        price:400,
        color:"blue",
        size:"M",
        category:"clothing"
    },  
    {
        id:'5',
        name:"Men's T-Shirt",
        brand:"AB",
        price:400,
        color:"blue",
        size:"M",
        category:"clothing"
    },  
    {
        id:'6',
        name:"Men's T-Shirt",
        brand:"AB",
        price:400,
        color:"blue",
        size:"M",
        category:"clothing"
    },  
    {
        id:'7',
        name:"Men's T-Shirt",
        brand:"AB",
        price:400,
        color:"blue",
        size:"M",
        category:"clothing"
    },  
    {
        id:'8',
        name:"Men's T-Shirt",
        brand:"AB",
        price:400,
        color:"blue",
        size:"M",
        category:"clothing"
    },  
    {
        id:'9',
        name:"Men's T-Shirt",
        brand:"AB",
        price:400,
        color:"blue",
        size:"M",
        category:"clothing"
    },  
    {
        id:'10',
        name:"Men's T-Shirt",
        brand:"AB",
        price:400,
        color:"blue",
        size:"M",
        category:"clothing"
    }  
];
const Women =[
    {
        id:'1',
        name:"Women's T-Shirt",
        brand:"AB",
        price:400,
        color:"blue",
        size:"M",
        category:"clothing"
    },  
    {
        id:'2',
        name:"Women's T-Shirt",
        brand:"AB",
        price:400,
        color:"blue",
        size:"M",
        category:"clothing"
    },  
    {
        id:'3',
        name:"Women's T-Shirt",
        brand:"AB",
        price:400,
        color:"blue",
        size:"M",
        category:"clothing"
    },  
    {
        id:'4',
        name:"Women's T-Shirt",
        brand:"AB",
        price:400,
        color:"blue",
        size:"M",
        category:"clothing"
    },  
    {
        id:'5',
        name:"Women's T-Shirt",
        brand:"AB",
        price:400,
        color:"blue",
        size:"M",
        category:"clothing"
    },  
    {
        id:'6',
        name:"Women's T-Shirt",
        brand:"AB",
        price:400,
        color:"blue",
        size:"M",
        category:"clothing"
    },  
    {
        id:'7',
        name:"Women's T-Shirt",
        brand:"AB",
        price:400,
        color:"blue",
        size:"M",
        category:"clothing"
    },  
    {
        id:'8',
        name:"Women's T-Shirt",
        brand:"AB",
        price:400,
        color:"blue",
        size:"M",
        category:"clothing"
    },  
    {
        id:'9',
        name:"Women's T-Shirt",
        brand:"AB",
        price:400,
        color:"blue",
        size:"M",
        category:"clothing"
    },  
    {
        id:'10',
        name:"Women's T-Shirt",
        brand:"AB",
        price:400,
        color:"blue",
        size:"M",
        category:"clothing"
    }  
];
const server = http.createServer((req,res)=>{
    if(req.url=='/'){
        res.end('<h1>Welcome to Men and Women Dummy Data</h1>');
    }
    else if(req.url=='/men'){
        res.statusCode=200;
        res.end(JSON.stringify(men));
    }
    else if(req.url=='/women'){
        res.statusCode=200;
        res.end(JSON.stringify(Women));
    }
    else{
        res.statusCode=404;
        res.end("<h1>😴 404 page not found!</h1>");
    }
});

server.listen(Port,()=>{
    console.log(`server is running at ${hostname}:${Port}`);
})
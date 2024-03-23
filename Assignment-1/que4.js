const express = require('express');
const Port = 3000;
const hostname = 'localhost';
const app = express();
app.get("/random",(req,res)=>{
     res.send(`"Random":${Math.floor(Math.random()*100)}`);
});
app.listen(Port,()=>{
    console.log(`server is runing at ${hostname}:${Port}`);
});



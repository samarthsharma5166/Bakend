const express = require('express');
const Port = 3000;
const hostname = 'localhost';
const app = express();
 
    app.get("/",(req,res)=>{
        res.send(`{msg:"I am homepage"}`);
    })
    app.get("/about",(req,res)=>{
        res.send(`{msg:"I am about page"}`);
    })
    app.get("/contact",(req,res)=>{
        res.send(`{email:"support@helpSkills.com"}`);
    })
    app.listen(Port,()=>{
        console.log(`server is runing at ${hostname}:${Port}`);
    });
const express=require("express");

const app=express();

app.get("/",(req,res)=>{
res.send({hi :"there"});
})


const PORT=5000||process.env.port;;
app.listen(PORT);
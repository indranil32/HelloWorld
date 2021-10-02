const express=require("express");
const app=express();
app.get("/",(req,res)=>{
  res.send("hello world!")
})
app.listen(80,(req,res)=>{
  console.log("succesfully running ")
})
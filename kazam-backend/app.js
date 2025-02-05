const express=require("express")
const app=express();

app.use("/",(req,res)=>{
    res.send("Hello from backend")
})

const PORT=1000;
app.listen(PORT,()=>{console.log("Server Started")})
const express=require("express");
const app=express();
require("dotenv").config();
require("./Connections/connection");
const cors=require("cors");
const UserAPI=require("./Routes/user")
app.use(cors());
app.use(express.json());
app.use("/api/v1",UserAPI)

//localhost:1000/api/v1/sign-in

app.use("/",(req,res)=>{
    res.send("Hello from backend");
})
const PORT=1000;
app.listen(PORT,()=>{console.log("Server Started")})
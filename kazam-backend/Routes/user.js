const router=require("express").Router();
const User = require("../Models/user");
const bcrypt=require("bcryptjs");
router.post("/sign-in",async(req,res)=>{
    try {
        const {username}=req.body;
    const {email}=req.body;
    const existingUser=await User.findOne({username:username});
    const existingEmail=await User.findOne({email:email});
    if(existingUser){
        return res.status(400).json({message:"Username Already Exists"})
    }   
    else if(username.length<4){
        return res.status(400).json({message:"Username should have at least 4 characters"})
    }
    if(existingEmail){
        return res.status(400).json({message:"Email Already Exists"})
    }

    const hashPass=await bcrypt.hash(req.body.password,10)

    const newUser=new User({username:req.body.username,email:req.body.email,password:hashPass,})

    await newUser.save();
    return res.status(200).json({message:"SignIn Successful"})
    } catch (error) {
        console.log(error);
        return res.status(400).json({message:"Internal Server Error"})
    }
})


module.exports=router;
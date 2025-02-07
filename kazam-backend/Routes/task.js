const router=require("express").Router();

const Task=require("../Models/task");
const User=require("../Models/user");
const  authenticateToken = require("../Routes/auth");

router.post("/create-task",authenticateToken,async(req,res)=>{
    try {
        const {title,description}=req.body;
        const {id}=req.headers;

        const newTask=new Task({title,description});
        const saveTask=await newTask.save();
        const taskId=saveTask._id
        await User.findByIdAndUpdate(id,{$push:{tasks:taskId._id}})

        res.status(200).json({message:"Task Created"})
    } catch (error) {
        console.log(error);
        return res.status(400).json({message:"Internal Server Error"})
    }
})

router.get("/get-all-tasks",authenticateToken,async(req,res)=>{
    try {
        const {id}=req.headers;
        const userData=await User.findById(id).populate({path:"tasks",options:{sort:{createdAt:-1}}});
        res.status(200).json({data:userData})
    } catch (error) {
        console.log(error)
        return res.status(400).json({message:"Internal Server Error"})
    }
})

router.delete("/delete-task/:id",authenticateToken,async(req,res)=>{
    try {
        const {id}=req.params;
        const userId=req.headers.id;
        await Task.findByIdAndDelete(id);
        await User.findByIdAndUpdate(userId,{$pull:{tasks:id}})
        res.status(200).json({message:"Task Deleted Successfully"})
    } catch (error) {
        console.log(error)
        return res.status(400).json({message:"Internal Server Error"})
    }
})

router.put("/update-task/:id",authenticateToken,async(req,res)=>{
    try {
        const {id}=req.params;
        const {title,description}=req.body;
        await Task.findByIdAndUpdate(id,{title,description})
        res.status(200).json({message:"Task Updated Successfully"})
    } catch (error) {
        console.log(error)
        return res.status(400).json({message:"Internal Server Error"})
    }
});

router.put("/update-imp-task/:id",authenticateToken,async(req,res)=>{
    try {
        const {id}=req.params;
        const TaskData=await Task.findById(id);
        const impTask=TaskData.important
        await Task.findByIdAndUpdate(id,{important:!impTask})
        res.status(200).json({message:"Task Updated Successfully"})
    } catch (error) {
        console.log(error)
        return res.status(400).json({message:"Internal Server Error"})
    }
});

router.put("/update-complete-task/:id",authenticateToken,async(req,res)=>{
    try {
        const {id}=req.params;
        const TaskData=await Task.findById(id);
        const compTask=TaskData.complete
        await Task.findByIdAndUpdate(id,{complete:!compTask})
        res.status(200).json({message:"Task Updated Successfully"})
    } catch (error) {
        console.log(error)
        return res.status(400).json({message:"Internal Server Error"})
    }
});

router.get("/get-imp-tasks",authenticateToken,async(req,res)=>{
    try {
        const {id}=req.headers;
        const Data=await User.findById(id).populate({path:"tasks",match:{important:true},options:{sort:{createdAt:-1}}});
        const impTaskData=Data.tasks;
        res.status(200).json({data:impTaskData})
    } catch (error) {
        console.log(error)
        return res.status(400).json({message:"Internal Server Error"})
    }
})

router.get("/get-complete-tasks",authenticateToken,async(req,res)=>{
    try {
        const {id}=req.headers;
        const Data=await User.findById(id).populate({path:"tasks",match:{complete:true},options:{sort:{createdAt:-1}}});
        const compTaskData=Data.tasks;
        res.status(200).json({data:compTaskData})
    } catch (error) {
        console.log(error)
        return res.status(400).json({message:"Internal Server Error"})
    }
})

router.get("/get-incomplete-tasks",authenticateToken,async(req,res)=>{
    try {
        const {id}=req.headers;
        const Data=await User.findById(id).populate({path:"tasks",match:{complete:false},options:{sort:{createdAt:-1}}});
        const incompTaskData=Data.tasks;
        res.status(200).json({data:incompTaskData})
    } catch (error) {
        console.log(error)
        return res.status(400).json({message:"Internal Server Error"})
    }
})

module.exports=router;
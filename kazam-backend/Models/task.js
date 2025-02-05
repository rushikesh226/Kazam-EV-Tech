const mongoose=require("mongoose");
const taskSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true
    },
    description:{
        type:String,
        required:true,
    },
    important:{
        type:boolean,
        default:false,
    },
    complete:{
        type:boolean,
        default:false,
    },
},{timestamps:true})


module.exports=mongoose.model("task",taskSchema);
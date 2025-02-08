import axios from "axios";
import React, { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
const InputData = ({inputDiv,setInputDiv,updatedData,setUpdatedData}) => {
  const [data,setData]=useState({
    title:"",
    description:""
  });
  useEffect(()=>{
    setData({title:updatedData.title,description:updatedData.description})
  },[updatedData])
  const handleChange=(e)=>{
    const {name,value}=e.target;
    console.log(e.target.value)
    setData({...data,[name]:value})
  };
  const headers={id:localStorage.getItem("id"),authorization:`Bearer ${localStorage.getItem("token")}`}

  const handleSubmit=async()=>{
    try {
      if(data.title===""||data.description===""){
        alert("All Fields Are Required")
      }
      else{
        const resp=await axios.post("https://kazam-ev-tech-3.onrender.com/api/v2/create-task",data,{headers});
        console.log(resp,"in 23");
        setData({title:"",description:""});
        setInputDiv("hidden")
      }
    } catch (error) {
      console.log(error)
    }
  }
  const handleUpdate=async()=>{
    try {
      if(data.title===""||data.description===""){
        alert("All Fields Are Required")
      }
      else{
        const resp=await axios.put(`https://kazam-ev-tech-3.onrender.com/api/v2/update-task/${updatedData.id}`,data,{headers});
        console.log(resp,"in 23");
        setInputDiv("hidden");
        setUpdatedData({id:"",title:"",description:""});
        setData({title:"",description:""})
      }
    } catch (error) {
      
    }
  }
  return (
    <>
      <div className={`${inputDiv} top-0 left-0 bg-gray-800 opacity-50 h-screen w-full`}></div>
      <div className={`${inputDiv} top-0 left-0 flex items-center justify-center h-screen w-full`}>
        <div className="w-3/6 bg-gray-900 p-4 rounded">
          <div className="flex justify-end">
            <button className="text-2xl" onClick={()=>{setInputDiv("hidden");setData({title:"",description:""});setUpdatedData({id:"",title:"",description:""})}}>
              <RxCross2 />
            </button>
          </div>
          <input
            type="text"
            name="title"
            placeholder="Enter Title"
            value={data.title}
            className="px-2 py-2 rounded w-full bg-gray-700 my-3"
            onChange={handleChange}
          />
          <textarea
            name="description"
            className="px-2 py-2 rounded w-full bg-gray-700 my-3"
            cols="30"
            rows="10"
            placeholder="Enter Description"
            value={data.description}
            onChange={handleChange}
          ></textarea>
          {updatedData.id!=="" ?<button className="px-3 py-2 bg-blue-400 rounded text-black text-xl font-semibold mr-2" onClick={handleUpdate}>
            Update
          </button>:
          <button className="px-3 py-2 bg-blue-400 rounded text-black text-xl font-semibold" onClick={handleSubmit}>
            Submit
          </button>}
        </div>
      </div>
    </>
  );
};

export default InputData;

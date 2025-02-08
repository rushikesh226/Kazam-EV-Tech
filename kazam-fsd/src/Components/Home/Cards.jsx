import React from 'react'
import { CiHeart } from "react-icons/ci";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { IoAddCircleSharp } from "react-icons/io5";
import axios from 'axios';
import { FaHeart } from "react-icons/fa";
const Cards = ({home,setInputDiv,data,setUpdatedData}) => {
    // const data=[
    //     {
    //         title: "Introduction to JavaScript",
    //         description: "Learn the basics of JavaScript, including variables, data types, and functions.",
    //         status:"Incomplete"
    //       },
    //       {
    //         title: "Understanding React",
    //         description: "A beginner-friendly guide to React concepts like components, props, and state management.",
    //         status:"Complete"
    //       },
    //       {
    //         title: "CSS Flexbox and Grid",
    //         description: "Master modern CSS layouts with Flexbox and Grid for responsive web design.",
    //         status:"Incomplete"
    //       },
    //       {
    //         title: "Node.js and Express.js",
    //         description: "Learn how to build backend applications using Node.js and Express.js frameworks.",
    //         status:"Complete"
    //       },
    //       {
    //         title: "Database Management with MongoDB",
    //         description: "Understand NoSQL databases and how to use MongoDB for storing and retrieving data.",
    //         status:"Incomplete"
    //       }
    // ]
    const headers={id:localStorage.getItem("id"),authorization:`Bearer ${localStorage.getItem("token")}`}

    const handleCompleteTask=async(id)=>{
      try {
        await axios.put(`https://kazam-ev-tech-3.onrender.com/api/v2/update-complete-task/${id}`,{},{headers});
      } catch (error) {
        console.log(error)
      }
    }
    const handleImportantTask=async(id)=>{
      try {
        await axios.put(`https://kazam-ev-tech-3.onrender.com/api/v2/update-imp-task/${id}`,{},{headers});
      } catch (error) {
        console.log(error)
      }
    };
    const handleDelete=async(id)=>{
      try {
        const resp=await axios.delete(`https://kazam-ev-tech-3.onrender.com/api/v2/delete-task/${id}`,{headers});
        console.log(resp.data.message)
      } catch (error) {
        console.log(error)
      }
    }
    const handleEditTask=async(id,title,description)=>{
      try {
        setInputDiv("fixed");
        setUpdatedData({id,title,description})
        console.log(id,title,description)
      } catch (error) {
        console.log(error)
      }
    }
  return (
    <div className='grid grid-cols-3 gap-4 p-4'>
      {
        data.map((card,i)=>{
            return <div key={i} className='bg-gray-800 rounded-sm p-4 flex flex-col justify-between'>
                <div>
                <h3 className='text-xl font-semibold'>{card.title}</h3>
                <p className='text-gray-300 my-2'>{card.description}</p>
                </div>
                <div className='mt-4  w-full flex items-center'>
                    <button className={`${card.complete===false?"bg-red-400":"bg-green-400"} p-2 rounded w-3/6`} onClick={()=>handleCompleteTask(card._id)}>{card.complete?"Completed":"Incomplete"}</button>
                    <div className=' p-2 w-3/6 text-2xl flex justify-around'>
                        <button onClick={()=>handleImportantTask(card._id)}>{card.important?<FaHeart className='text-red-500'/>:<CiHeart/>}</button>
                        {home!=="false" &&<button onClick={()=>handleEditTask(card._id,card.title,card.description)}><FaEdit /></button>}
                        <button onClick={()=>handleDelete(card._id)}><MdDelete /></button>
                    </div>
                </div>
            </div>
        })
      }
      {home==="true" && <div className='bg-gray-800 rounded-sm p-4 flex flex-col justify-center items-center text-gray-300 hover:scale-105 hover:cursor-pointer transition-all duration-300'>
      <button onClick={()=>setInputDiv("fixed")}><IoAddCircleSharp className='text-5xl'/></button>
                <h2 className='text-300 mt-4'>Add Task</h2>
            </div>}
    </div>
  )
}

export default Cards

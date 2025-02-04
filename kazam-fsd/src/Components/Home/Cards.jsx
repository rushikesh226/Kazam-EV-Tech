import React from 'react'
import { CiHeart } from "react-icons/ci";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { IoAddCircleSharp } from "react-icons/io5";
const Cards = ({home}) => {
    const data=[
        {
            title: "Introduction to JavaScript",
            description: "Learn the basics of JavaScript, including variables, data types, and functions.",
            status:"Incomplete"
          },
          {
            title: "Understanding React",
            description: "A beginner-friendly guide to React concepts like components, props, and state management.",
            status:"Complete"
          },
          {
            title: "CSS Flexbox and Grid",
            description: "Master modern CSS layouts with Flexbox and Grid for responsive web design.",
            status:"Incomplete"
          },
          {
            title: "Node.js and Express.js",
            description: "Learn how to build backend applications using Node.js and Express.js frameworks.",
            status:"Complete"
          },
          {
            title: "Database Management with MongoDB",
            description: "Understand NoSQL databases and how to use MongoDB for storing and retrieving data.",
            status:"Incomplete"
          }
    ]
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
                    <button className={`${card.status==="Incomplete"?"bg-red-400":"bg-green-400"} p-2 rounded w-3/6`}>{card.status}</button>
                    <div className=' p-2 w-3/6 text-2xl flex justify-around'>
                        <button><CiHeart /></button>
                        <button><FaEdit /></button>
                        <button><MdDelete /></button>
                    </div>
                </div>
            </div>
        })
      }
      {home==="true" && <div className='bg-gray-800 rounded-sm p-4 flex flex-col justify-center items-center text-gray-300 hover:scale-105 hover:cursor-pointer transition-all duration-300'>
      <IoAddCircleSharp className='text-5xl'/>
                <h2 className='text-300 mt-4'>Add Task</h2>
            </div>}
    </div>
  )
}

export default Cards

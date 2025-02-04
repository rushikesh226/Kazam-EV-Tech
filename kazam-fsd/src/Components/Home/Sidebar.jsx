import React from 'react'
import { CgNotes } from "react-icons/cg";   
import { MdLabelImportant } from "react-icons/md";  
import { FaCheckDouble } from "react-icons/fa6";  
import { TbNotebookOff } from "react-icons/tb";  
import { Link } from 'react-router-dom';
const Sidebar = () => {
    const data=[
        {
            title:"All Tasks",
            icon:<CgNotes />,
            link:"/"

        },
        {
            title:"Important Tasks",icon:<MdLabelImportant />,link:"/importantTasks"

        },{
            title:"Completed Tasks",icon:<FaCheckDouble />,link:"/completedTasks"

        },{
            title:"Incomplete Tasks",icon:<TbNotebookOff />,link:"/incompleteTasks"

        },
    ]
  return (
    <>
      <div>
      <h2 className='text-xl font-semibold'>Name</h2>
      <h2 className='my-1 text-gray-400'>Email:</h2>
      </div>
      <div>
        {data.map((item,i)=>{
            return <Link key={i} to={item.link} className='my-2 flex items-center hover:bg-gray-600 p-2 rounded transition-all duration-300'>{item.icon}&nbsp; {item.title}</Link>
        })}
      </div>
      <div>
        <button className='bg-gray-400 w-full p-2 rounded'>Log Out</button>
      </div>
    </>
  )
}

export default Sidebar

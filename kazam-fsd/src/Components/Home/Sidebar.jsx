import React, { useEffect, useState } from 'react'
import { CgNotes } from "react-icons/cg";   
import { MdLabelImportant } from "react-icons/md";  
import { FaCheckDouble } from "react-icons/fa6";  
import { TbNotebookOff } from "react-icons/tb";  
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authActions } from '../../Store/auth';
import axios from 'axios';
const Sidebar = () => {
  const dispatch=useDispatch();
  const history=useNavigate();
    const data1=[
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
    ];
    const [data,setData]=useState({})
    const logout=()=>{
      dispatch(authActions.logout());
      localStorage.clear("id");
      localStorage.clear("token");
      history("/signup")
    };

    const headers={id:localStorage.getItem("id"),authorization:`Bearer ${localStorage.getItem("token")}`}
    useEffect(() => {
      const fetchData=async()=>{
        const resp=await axios.get("http://localhost:1000/api/v2/get-all-tasks",{headers});
        setData(resp.data.data)
      }
      if(localStorage.getItem("id")&&localStorage.getItem("token")){

        fetchData()
      }
    })
    
  return (
    <>
      {data && <div>
      <h2 className='text-xl font-semibold'>Username: {data.username}</h2>
      <h2 className='my-1 text-gray-400'>Email: {data.email}</h2>
      </div>}
      <div>
        {data1.map((item,i)=>{
            return <Link key={i} to={item.link} className='my-2 flex items-center hover:bg-gray-600 p-2 rounded transition-all duration-300'>{item.icon}&nbsp; {item.title}</Link>
        })}
      </div>
      <div>
        <button className='bg-gray-400 w-full p-2 rounded' onClick={logout}>Log Out</button>
      </div>
    </>
  )
}

export default Sidebar

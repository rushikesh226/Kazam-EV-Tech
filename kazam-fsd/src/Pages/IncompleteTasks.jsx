import React, { useEffect, useState } from 'react'
import Cards from '../Components/Home/Cards';
import axios from 'axios';

const IncompleteTasks = () => {
  const [data,setData]=useState();
  const headers={id:localStorage.getItem("id"),authorization:`Bearer ${localStorage.getItem("token")}`}

    useEffect(() => {
      const fetchData=async()=>{
        const resp=await axios.get("https://kazam-ev-tech-3.onrender.com/api/v2/get-incomplete-tasks",{headers});
        setData(resp.data.data);
      }
      fetchData()
    })
  return (
    <div>
      {data && <Cards home={"false"} data={data}/>}
    </div>
  )
}

export default IncompleteTasks

import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Cards from '../Components/Home/Cards';

const CompletedTasks = () => {
  const [data,setData]=useState();
  const headers={id:localStorage.getItem("id"),authorization:`Bearer ${localStorage.getItem("token")}`}

    useEffect(() => {
      const fetchData=async()=>{
        const resp=await axios.get("http://localhost:1000/api/v2/get-complete-tasks",{headers});
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

export default CompletedTasks

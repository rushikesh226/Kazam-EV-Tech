import React, { useEffect, useState } from 'react';
import Cards from '../Components/Home/Cards';
import axios from 'axios';

const ImportantTasks = () => {
  const [data,setData]=useState();
  const headers={id:localStorage.getItem("id"),authorization:`Bearer ${localStorage.getItem("token")}`}

    useEffect(() => {
      const fetchData=async()=>{
        const resp=await axios.get("https://kazam-ev-tech-3.onrender.com/api/v2/get-imp-tasks",{headers});
        setData(resp.data.data);
      }
      fetchData()
    })
    console.log(data,"in imp tasks")
  return (
    <div>
     {data && <Cards home={"false"} data={data}/>}
    </div>
  )
}

export default ImportantTasks

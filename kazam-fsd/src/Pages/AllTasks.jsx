import React, { useState } from 'react'
import Cards from '../Components/Home/Cards'
import { IoAddCircleSharp } from "react-icons/io5";
import InputData from '../Components/Home/InputData';

const AllTasks = () => {
    const [inputDiv,setInputDiv]=useState("hidden")
  return (<>
    <div>
        <div className='w-full flex items-end justify-end  px-4 py-2'>
            <button onClick={()=>setInputDiv("fixed")}>
            <IoAddCircleSharp className='text-5xl text-gray-300 hover:text-gray-100 transition-all duration-300'/>

            </button>
        </div>
     <Cards home="true" setInputDiv={setInputDiv}/>
    </div>
    <InputData inputDiv={inputDiv} setInputDiv={setInputDiv}/>    
    </>
  )
}

export default AllTasks

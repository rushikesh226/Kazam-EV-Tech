import React from 'react'
import Cards from '../Components/Home/Cards'
import { IoAddCircleSharp } from "react-icons/io5";

const AllTasks = () => {
  return (
    <div>
        <div className='w-full flex items-end justify-end  px-4 py-2'>
            <button>
            <IoAddCircleSharp className='text-5xl text-gray-300 hover:text-gray-100 transition-all duration-300'/>

            </button>
        </div>
     <Cards home="true"/>
    </div>
  )
}

export default AllTasks

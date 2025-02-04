import React from 'react'
import Sidebar from '../Components/Home/Sidebar'
const Home = () => {
  return (
    <div className="flex h-[98vh] gap-4">
      <div className="border rounded-xl w-1/6 p-4 flex flex-col justify-between">
      <Sidebar/>
      </div>
      <div className="border rounded-xl w-5/6 p-4">Hello2</div>
    </div>
  )
}

export default Home
 
import React from 'react'

const Sidebar = () => {
    const data=[
        {
            title:"All Tasks",

        },
        {
            title:"Important Tasks",

        },{
            title:"Completed Tasks",

        },{
            title:"Incomplete Tasks",

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
            return <div className='my-2'>{item.title}</div>
        })}
      </div>
      <div>
        <button className='bg-gray-400 w-full p-2 rounded'>Log Out</button>
      </div>
    </>
  )
}

export default Sidebar

import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='h-[90vh] flex items-center justify-center'>
        <div className='p-4 w-2/6 rounded bg-gray-800'>
        <div className='text-2xl font-semibold'>Login</div>
        <input type="username" name="username" placeholder='username' className='px-3 py-2 my-3 bg-gray-700 w-full rounded'/>
        <input type="password" name="password" placeholder='password' className='px-3 py-2 my-3 bg-gray-700 w-full rounded'/>
        <div className='w-full flex justify-between items-center'>
        <button className='bg-blue-400 text-xl font-semibold text-black px-3 py-2 rounded '>Login</button>
        <Link to="/signup" className='p-3 text-l text-gray-400 hover:text-gray-200'>Don't have an account? Signup Here</Link>
        </div>
        </div>
    </div>
  )
}

export default Login

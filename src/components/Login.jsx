import React from 'react'
import Header from './Header'

const Login = () => {
  return (
    <div>
      <Header />
      <div className='absolute'>
      <img 
      className='bg-cover h-screen w-full bg-no-repeat bg-center absolute'
      src="https://assets.nflxext.com/ffe/siteui/vlv3/bfc0fc46-24f6-4d70-85b3-7799315c01dd/web/GH-en-20240923-TRIFECTA-perspective_447250ce-3fca-43ba-bef8-dddcc8484c30_small.jpg" 
      alt="Netflix Logo" />
      </div>
      <form className=' w-3/12 absolute p-12 bg-black my-36 mx-auto left-0 right-0 opacity-90 text-white rounded-lg bg-opacity-80'>
        <h1 className='text-3xl font-bold py-4'>Sign In</h1>
        <input type='text' placeholder='Email Address' className='p-2 my-4 bg-gray-700'/>
        <input type= 'password' placeholder='Password' className='p-2 my-4 bg-gray-700'/>
        <button className='bg-red-600 p-4 my-6 w-full '>Sign In </button>
      </form>

    </div>
  )
}

export default Login
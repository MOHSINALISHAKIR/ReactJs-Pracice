import React from 'react'

const Form = () => {
  return (
    <div className='flex flex-col  items-center gap-10  justify-center mt-10'>
        <h1 className='text-[30px]'>REACT FORMS</h1>
    <form className='flex flex-col gap-3 items-center justify-center w-[400px] shadow-2xl h-[300px] '>
        <div className='flex flex-col gap-1 w-[350px]'>
            <label htmlFor="name">UserName</label>
            <input className='px-2 py-1 rounded-lg outline-none bg-gray-500 text-white' type="text" id="name" placeholder='Enter Name' />
        </div>
        <div className='flex flex-col gap-1 w-[350px]'>
            <label htmlFor="email">Email</label>
            <input className='px-2 py-1 rounded-lg outline-none bg-gray-500 text-white' type="email" name="" id="email" placeholder='Email' />
        </div>
        <div className='flex flex-col gap-1 w-[350px]'>
            <label htmlFor="password">Password</label>
            <input className='px-2 py-1 rounded-lg outline-none bg-gray-500 text-white' type="password" name="" id="password" placeholder='Password' />
        </div>
        <div>
            <button className='bg-blue-500 text-black px-2 py-1 rounded-lg'>Submit</button>
        </div>
    </form>
    </div>
    

  )
}

export default Form
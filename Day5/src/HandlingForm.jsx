import React, { useState } from 'react'

const HandlingForm = () => {
    let [formData,setFormData] = useState({
        userName:'',
        email:'',
        password:''
    })
    let changeForm = (event) =>{
        setFormData((currVal)=>{
            return {...currVal,[event.target.name]:event.target.value}
        })
    }
    let formSubmit = (event)=>{
        event.preventDefault();
        console.log(formData)
    }
  return (
    <div className='flex flex-col  items-center gap-10  justify-center  bg-blue-300 w-screen h-screen'>
        <form className='flex flex-col gap-3 items-center justify-center w-[400px] shadow-2xl h-[300px] bg-white rounded-lg  shadow-green-500 ' onSubmit={formSubmit} >
            <div className='flex flex-col gap-1 w-[350px]'>
            <label htmlFor="name">UserName</label>
            <input className='px-2 py-1 rounded-lg outline-none bg-gray-500 text-white' type="text" id="name" placeholder='Enter Name' name='userName' value={formData.userName} onChange={changeForm} />
        </div>
        <div className='flex flex-col gap-1 w-[350px]'>
            <label htmlFor="email">Email</label>
            <input  className='px-2 py-1 rounded-lg outline-none bg-gray-500 text-white' type="email" name="email" id="email" placeholder='Email' value={formData.email} onChange={changeForm} />
        </div>
        <div className='flex flex-col gap-1 w-[350px]'>
            <label htmlFor="password">Password</label>
            <input className='px-2 py-1 rounded-lg outline-none bg-gray-500 text-white' type="password" name="password" id="password" placeholder='Password' value={FormData.password} onChange={changeForm} />
        </div>
        <div>
            <button className='bg-blue-500 text-black px-2 py-1 rounded-lg'>Submit</button>
        </div>
        </form>
    </div>
  )
}

export default HandlingForm
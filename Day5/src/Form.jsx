import React from 'react'
import { useState } from 'react'

const Form = () => {
     let [name,setName]  = useState('')
     let [email,setEmail] = useState('')
     let [password,setPassword] = useState('')

     let changeName = (event)=>{
        setName(event.target.value)
     }
     let changeEmail = (event)=>{
        setEmail(event.target.value)
     }
     let changePassword = (event)=>{
        setPassword(event.target.value)
     }
     let formSubmit = (event)=>{
        event.preventDefault()
        setName('')
        setEmail('')
        setPassword('')
        console.log(`${name},and ${email}`)

     }
  return (
    <div className='flex flex-col  items-center gap-10  justify-center  bg-blue-300 w-screen h-screen'>
        <h1 className='text-[30px]'>REACT FORMS</h1>
    <form className='flex flex-col gap-3 items-center justify-center w-[400px] shadow-2xl h-[300px] bg-white rounded-lg  shadow-green-500 ' onSubmit={formSubmit}>
        <div className='flex flex-col gap-1 w-[350px]'>
            <label htmlFor="name">UserName</label>
            <input className='px-2 py-1 rounded-lg outline-none bg-gray-500 text-white' type="text" id="name" placeholder='Enter Name' value={name} onChange={changeName} />
        </div>
        <div className='flex flex-col gap-1 w-[350px]'>
            <label htmlFor="email">Email</label>
            <input  className='px-2 py-1 rounded-lg outline-none bg-gray-500 text-white' type="email" name="" id="email" placeholder='Email' value={email} onChange={changeEmail} />
        </div>
        <div className='flex flex-col gap-1 w-[350px]'>
            <label htmlFor="password">Password</label>
            <input className='px-2 py-1 rounded-lg outline-none bg-gray-500 text-white' type="password" name="" id="password" placeholder='Password' value={password} onChange={changePassword} />
        </div>
        <div>
            <button className='bg-blue-500 text-black px-2 py-1 rounded-lg'>Submit</button>
        </div>
    </form>
    </div>
    

  )
}

export default Form
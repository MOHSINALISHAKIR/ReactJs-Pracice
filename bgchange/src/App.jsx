import React, { useState } from 'react'

const App = () => {
  const [color,setColor]=useState("")
  return (
    
    <>
    <div style={{backgroundColor:color}}  className={`w-full h-screen `} >
      <div className='flex items-center  justify-center'>
        <button onClick={()=>setColor("red")} className='w-[250px] h-[120px] bg-red-900'>Red</button>
        <button onClick={()=>setColor("green")} className='w-[250px] h-[120px] bg-green-700'>Green</button>
        <button onClick={()=>setColor("yellow")} className='w-[250px] h-[120px] bg-yellow-900'>yellow</button>
        <button onClick={()=>setColor("pink")} className='w-[250px] h-[120px] bg-pink-900'>pink</button>
      </div>
    

    </div>
    </>
  )
}

export default App
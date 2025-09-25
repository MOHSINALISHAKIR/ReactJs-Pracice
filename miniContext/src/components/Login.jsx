import React, { useContext, useState } from 'react'
import userContext from '../context/UserContext.js';

const Login = () => {
    const [userName,setUserName] = useState('');
    const [password,setPassword] = useState('');
    const {setUser} = useContext(userContext);

    const handleSubmit = (e)=>{
        e.preventDefault();
        setUser({userName,password})
    }

  return (
    <div>
        <h2>Login</h2>
        <input type="text" value={userName} onChange={(e)=>setUserName(e.target.value)} />
        <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)} />
        <button onClick={handleSubmit}>Login</button>
    </div>
  )
}

export default Login
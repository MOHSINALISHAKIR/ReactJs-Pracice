import React, { useContext } from 'react'
import userContext from '../context/UserContext';


const Profile = () => {
    const {user} = useContext(userContext);
    if(!user) return <h2>Please Login</h2>
  return (
    <div>Welcome {user.userName}</div>
  )
}

export default Profile
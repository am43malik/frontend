import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
   
    <div >
        <div className="flex justify-center align-middle">
        <Link to ="/adminlogin" ><button className="btn bg-blue-700 text-white p-4 my-56 mx-12 border rounded-md text-xl font-bold ">Admin Login</button> </Link>   
        <Link to ="/userlogin" ><button className="btn bg-blue-700 text-white p-4 my-56 mx-12 border rounded-md text-xl font-bold ">User Login</button> </Link>   
        
        </div>
    </div>
  )
}

export default Login
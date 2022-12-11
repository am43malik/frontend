import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../images/logo1.jfif'
const Addgroups = () => {
  return (
    <div>
      <div className="block   bg-cover bg-no-repeat ">
			<div className="grid  pt-4 pl-3 bg-white rounded-3xl ">
            {/* <h1 className="text-5xl font-semibold text-blue-500">Add groups</h1> */}

    <div className="block space-x-3">
   {/* <Link to="/adminpanel"> <button class="bg-pink-600 px-4 py-2 font-semibold text-white inline-flex my-4 rounded ml-3">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
            </svg>

        <span>Add Users</span>
    </button></Link> 
    <br /> */}
   {/* <Link to="/adminpanel"> <button class="bg-pink-600 px-4 py-2 font-semibold text-white inline-flex my-4 rounded ml-3">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
            </svg>

        <span>Add Users</span>
    </button></Link> 
    <br /> */}
   
   <Link to ="/adminpanel"> <button className="bg-blue-300 px-4 py-2 font-semibold text-white inline-flex rounded my-4 ml-3 ">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>

        <span> Add Users</span>
    </button></Link>
    <br />
   <Link to ="/addproducts"> <button className="bg-red-500  px-4 py-2 font-semibold text-white inline-flex rounded my-4 ">
   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0l-3-3m3 3l3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
</svg>


        <span> Add Products</span>
    </button></Link>
    <br />
   <Link to ="/Addsuppliers"> <button className="bg-pink-600 px-4 py-2 font-semibold text-white inline-flex rounded my-4 ">
   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>


        <span> Addsuppliers</span>
    </button></Link>
    <br />
  <Link to="/Addloactaion">  <button className="bg-red-500 px-4 py-2 font-semibold text-white inline-flex  rounded">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
</svg>

        <span> Add Loactaion</span>
    </button></Link>

    </div>
			</div>
		</div>
    </div>
  )
}

export default Addgroups
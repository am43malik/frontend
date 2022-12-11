import React from 'react'
import { Link } from 'react-router-dom'
const Dataentry = () => {
  return (
    <div>
      <div className="block bg-cover bg-no-repeat">
			<div className=" mx-auto py-5 px-3 sm:my-auto bg-white rounded-3xl space-y-10">
            
    <div className=" ">

      <Link to = "/stockin"  > <button className="bg-blue-500 px-4 py-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
    </svg>


        <span>Stoce In</span>
    </button>
    </Link>
    <br />
    <div className='my-3'>
   <Link to ="/stockout"> <button className="bg-blue-300 px-4 py-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m6.75 12l-3-3m0 0l-3 3m3-3v6m-1.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
</svg>


        <span> Stock Out</span>
    </button></Link>
    </div>
  <Link to="/Productslist">  <button className="bg-red-500 px-4 py-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" />
</svg>


        <span>Products List</span>
    </button></Link>

    </div>
			</div>
		</div>
    </div>
  )
}

export default Dataentry
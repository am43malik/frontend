import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../images/logo1.jfif'
const Addproducts = () => {
  return (
    <div>
    <section className="bg-gray-50 ">
<div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
   <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-gray-900 ">
   <img className="w-20 h-8 mr-6" src={logo} alt="logo"/>
       Add produts 
   </a>
   <div className="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 bg-gray-10 dark:border-gray-600">
       <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
           <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
           Add Products
           </h1>
           <form className="w-full max-w-lg">

  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
        Products Name
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" placeholder="Enter your produts name"/>
      
    </div>
  </div>

<div className="flex flex-wrap -mx-3 mb-6">
 <div className="w-full px-3">
   <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
     select unit
   </label>
   <select id="countries" className="bg-gray-200 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500">
         
         <option value="Pharmacy">1.5</option>
         <option value="Lab">1.7</option>
         <option value="Hopital">2.3</option>
         <option value="Cleaner">2.5</option>
         </select>
 </div>
</div>
<div className="flex flex-wrap -mx-3 mb-6">
 <div className="w-full px-3">
   <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
     Type
   </label>
   <select id="countries" className="bg-gray-200 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500">
         
         <option value="Pharmacy">Medicine</option>
         <option value="Lab">Injection</option>
         </select>
 </div>
</div>
<div className="flex flex-wrap -mx-3 mb-6">
 <div className="w-full px-3">
   <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
     Company
   </label>
   <select id="countries" className="bg-gray-200 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500">
         
         <option value="Pharmacy">Company1</option>
         <option value="Lab">Company2</option>
         </select>
 </div>
 <div className="w-full px-3 pt-5 ">
 <Link to= "/Addsuppliers">
 <button type="submit" className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Submit</button>
 </Link>  
 </div>
 
</div>

</form>
       </div>
   </div>
</div>
</section>
 </div>
  )
}

export default Addproducts
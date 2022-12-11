import React from 'react'

import { Link } from 'react-router-dom'
import logo from '../../images/logo1.jfif'
import { DataGrid } from '@mui/x-data-grid';
import { Container } from '@mui/material';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'productsname', headerName: 'Products name', width: 130 },
  { field: 'productstype', headerName: 'Products type', width: 130 },
  {
    field: 'unit',
    headerName: 'unit',
    type: 'number',
    width: 90,
  },
  {
    field: 'Quantity',
    headerName: 'Quantity',
    type: 'number',
    width: 90,
  },
  {
    field: 'total',
    headerName: 'total',
    type: 'number',
    width: 90,
  },

];

const rows = [
  { id: 1, productstype: 'Durg', productsname: 'Medicine1', unit: 1.4 },
  { id: 2, productstype: 'injection', productsname: 'Medicine2', unit: 1.5 },
  { id: 3, productstype: 'injection', productsname: 'Medicine3', unit: 3.5 },
  { id: 4, productstype: 'injection', productsname: 'Medicine4', unit: 2.5 },
  { id: 5, productstype: 'Durg', productsname: 'Medicine5', unit: 5.5 },
  { id: 6, productstype: 'Durg', productsname: 'Medicine1', unit: 1.4 },
  { id: 7, productstype: 'injection', productsname: 'Medicine2', unit: 1.5 },
  { id: 8, productstype: 'injection', productsname: 'Medicine3', unit: 3.5 },
  { id: 9, productstype: 'injection', productsname: 'Medicine4', unit: 2.5 },
  { id: 10, productstype: 'Durg', productsname: 'Medicine5', unit: 5.5 },
  { id: 11, productstype: 'Durg', productsname: 'Medicine1', unit: 1.4 },
  { id: 12, productstype: 'injection', productsname: 'Medicine2', unit: 1.5 },
  { id: 13, productstype: 'injection', productsname: 'Medicine3', unit: 3.5 },
  { id: 14, productstype: 'injection', productsname: 'Medicine4', unit: 2.5 },
  { id: 15, productstype: 'Durg', productsname: 'Medicine5', unit: 5.5 },

];
const Stockout = () => {
    return (
        <div>
        <div className=' ml-96'>
        <section className=" ">
            <h1 className='ml-48 mt-4 font-bold text-2xl'>Stock Out Products</h1>
           <div className="p-6 space-y-4 md:space-y-9 sm:p-8">
       
               <form className="w-full max-w-lg">
               <div class="flex flex-wrap -mx-3 mb-2">
 
        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
            Select Products
          </label>
          <div class="relative">
            <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
              <option>Medicine</option>
              <option>Injection</option>
              <option>Drug</option>
              <option>Disposable</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
        </div>
        {/* <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
            type
          </label>
          <div class="relative">
            <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
              <option>Medicine</option>
              <option>Injection</option>
              <option>Drug</option>
              <option>Disposable</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
        </div> */}

      

        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
            Suplire
          </label>
          <div class="relative">
            <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
              <option>Dusri</option>
              <option>Glovit</option>
              <option>Fyafy</option>
              
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
        </div>
        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
          QUANTITY
          </label>
          <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="QUANTITY"/>
        </div>
        <div class="w-full md:w-full px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
          Selling  Price
          </label>
          <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Price"/>
        </div>
    
      </div>
    
            </form>
           </div>
    
    </section>
    
    <button className="bg-blue-500 px-4 py-2 absolute mt-[350px] ml-[70px] font-semibold text-white inline-flex items-center space-x-2 rounded" disabled>
        
    
            <span>Sub Total= 878</span>
        </button>
     </div>
    
     {/* Here i am using Matrial UI Tabel */}
    <Container>
     <div style={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10]}
            // checkboxSelection
          />
        </div>
    </Container>
     </div>
      )
}

export default Stockout
import React from 'react'
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    { field: 'id', headerName: 'SR NO', width: 70 },
    { field: 'Itemcode', headerName: 'Item Cod', width: 130 },
    { field: 'firstName', headerName: 'porducts Name', width: 130 },
    { field: 'productstype', headerName: 'porducts Type', width: 130 },
    { field: 'lastName', headerName: 'Supplier Name', width: 130 },
    {field: 'age',headerName: 'quantity',type: 'number',width: 90,},
    {field: 'price',headerName: 'price',type: 'number',width: 90,},

  ];
  
  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];
  
const Productslist = () => {
  return (
    <div>
    <div>
        <h1 className='text-center my-8 font-bold text-2xl'>Products List</h1>
    </div>
    <div style={{ height: 800, width: '100%', marginTop:'10px', padding:'5px'}}>
    <DataGrid
      rows={rows}
      columns={columns}
      pageSize={10}
      rowsPerPageOptions={[10]}
      checkboxSelection
    />
  </div>
<center> <button type="submit" className=" text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-10 mb-3 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 relative ">Grand Total = </button></center> 
  </div>
  )
}

export default Productslist
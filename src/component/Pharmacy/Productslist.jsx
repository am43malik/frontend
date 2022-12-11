import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
const columns = [
    { field: 'SR NO', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'porducts Name', width: 130 },
    { field: 'lastName', headerName: 'Unit', width: 130 },
    {field: 'age',headerName: 'Age',type: 'number',width: 90,},

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
      // checkboxSelection
    />
  </div>
  </div>
  )
}

export default Productslist
import React from 'react'
import MaterialTable from 'material-table'
import { ThemeProvider,createTheme, Stack, TextField, Autocomplete  } from '@mui/material';
const Monthlyreport = () => {
  const { useState } = React;
  const top100Films = [
    { label: 'The Shawshank Redemption', year: 1994 },
    
    { label: 'Monty Python and the Holy Grail', year: 1975 },
  ];
  const [columns, setColumns] = useState([
    { title: 'Sno', field: 'sno' },
    { title: 'Date', field: 'Date' },
    { title: 'Products Name/unit', field: 'ProductsName' },
    { title: 'company Name', field: 'companyName' },
    { title: 'Qauntity', field: 'surname', initialEditValue: 'initial edit value' },
    { title: 'Price', field: 'birthYear', type: 'numeric' },
    {title: 'total',field: 'birthCity',lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },},
  ]);

  const [data, setData] = useState([
    { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
   
   
    { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
  ]);
  const defaultMaterialTheme = createTheme();
  return (
   
    <div className='mx-6'>
       <Stack direction="row" spacing={2} margin="23px" justifyContent="center">
     <TextField type="Date" sx={{width:200}} id="outlined-basic" label="" variant="outlined"  />
     <TextField type="Date" sx={{width:200}} id="outlined-basic" label="" variant="outlined"  />
     <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={top100Films}
          sx={{ width: 200 }}
          renderInput={(params) => <TextField {...params} label="Select Location" />}
          
        />
     <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={top100Films}
          sx={{ width: 200 }}
          renderInput={(params) => <TextField {...params} label="Select Trainer" />}
          
        />

      
      </Stack>
  <center> <button type="submit" className=" text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-10 mb-1 mt-1 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 relative my-2">Submit </button></center> 
      <ThemeProvider theme={defaultMaterialTheme}>
      <MaterialTable
      data={data}
      columns={columns}
    editable={{
        isEditable: rowData => rowData.date === data.date, // only name(a) rows would be editable
        isEditable: rowData => rowData.ProductsName === data.ProductsName,
        isEditable: rowData => rowData.companyName === data.companyName, // only name(b) rows would be deletable,
        isEditable: rowData => rowData.Qauntity === data.Qauntity,
        isEditable: rowData => rowData.Price === data.Price,
        isEditable: rowData => rowData.total === data.total,

     
        onRowAddCancelled: rowData => console.log('Row adding cancelled'),
        onRowUpdateCancelled: rowData => console.log('Row editing cancelled'),
        onRowAdd: newData =>
            new Promise((resolve, reject) => {
                setTimeout(() => {
                    /* setData([...data, newData]); */

                    resolve();
                }, 1000);
            }),
        onRowUpdate: (newData, oldData) =>
            new Promise((resolve, reject) => {
                setTimeout(() => {
                    const dataUpdate = [...data];
                    const index = oldData.tableData.id;
                    dataUpdate[index] = newData;
                    setData([...dataUpdate]);

                    resolve();
                }, 1000);
            }),
        onRowDelete: oldData =>
            new Promise((resolve, reject) => {
                setTimeout(() => {
                    const dataDelete = [...data];
                    const index = oldData.tableData.id;
                    dataDelete.splice(index, 1);
                    setData([...dataDelete]);

                    resolve();
                }, 1000);
            })
    }}
/>
{/* {console.log(rowData.date,'date')} */}
    </ThemeProvider>
  <center> <button type="submit" className=" text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-10 mb-1 mt-1 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 relative my-2">Print </button></center> 
  <center> <button type="submit" className=" text-white bg-red-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-10 mb-1 mt-1 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 relative my-2">Grand Total = </button></center> 

    </div>
  )
}

export default Monthlyreport
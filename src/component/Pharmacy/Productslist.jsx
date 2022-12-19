import React from 'react'
import { Link } from 'react-router-dom'
import MaterialTable from 'material-table'
import { ThemeProvider,createTheme, Stack, TextField, Autocomplete  } from '@mui/material';
import axios from "axios";
import { useEffect } from 'react';

const Productslist = () => {
  const { useState } = React;
  const top100Films = [
    { label: 'The Shawshank Redemption', year: 1994 },
    
    { label: 'Monty Python and the Holy Grail', year: 1975 },
  ];
  const [data, setData]=useState()
  const [columns, setColumns] = useState([
    { field: 'id', title: 'sno' ,width: 10},
    { field: 'itemcode', title: 'Date',width: 10 },
    { field: 'suplierNo', title: 'ProductsName',width: 10 },
    { field: 'suplier', title: 'companyName',width: 10 },
    { field: 'addproduct', title: 'surname', initialEditValue: 'initial edit value',width: 10 },
    { field: 'typeproduct', title: 'typeproduct', type: 'numeric',width: 10 },
    {field: 'productunit',title: 'productunit',lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' ,width: 10},},
    { field: 'Price', title: 'companyName' ,width: 10},
    { field: 'quantity', title: 'companyName',width: 10 },
    { field: 'expriy', title: 'companyName',width: 10 },

  ]);
  

useEffect(()=>{
  allProductdata()
},[])

  const allProductdata = async () => {
    const res = await axios.get("http://localhost:3000/stockIn");
    setData(res.data);
  

   
  };
  const defaultMaterialTheme = createTheme();
  return (
   
    <div className='mx-6 mt-10'>
     
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
     
        onRowUpdate: (newData, oldData) =>
            new Promise((resolve, reject) => {
                
                    const dataUpdate = [...data];
                    const index = oldData.tableData.id;
                    dataUpdate[index] = newData;
                    setData([...dataUpdate]);

                    resolve();
              
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

    </ThemeProvider>
  
    </div>
  )
}

export default Productslist
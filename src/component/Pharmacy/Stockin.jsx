import {
  Autocomplete,
  Button,
  Container,
  Stack,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect } from "react";
import axios from "axios";
import { Controller, useForm  } from "react-hook-form";


const top100Films = [
  { label: "The Shawshank Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
];

const columns = [
  { field: "id", headerName: "SrNO", width: 70 },
  { field: "productsname", headerName: "Products name", width: 130 },
];
const rows = [
  { id: 1, productstype: "Durg", productsname: "Medicine1", unit: 1.4 },
  { id: 2, productstype: "injection", productsname: "Medicine2", unit: 1.5 },
];
var ProductsName = [];
var CompanyNames = [];
var Units = [];
const Stockin = () => {
  const [products, setProducts] = useState([]);
  const { register, handleSubmit, control, formState: { errors } } = useForm();
 
  const [data, setData] = useState([{
    id: 1 ,
    itemcode: "",
    suplierNo: "",
    suplier: "",
    addproduct: "",
    productType: "",
    productUnit: "",
    Price: "",
    quantity: "",
    expriy: ""
  
  }])
 


  useEffect(() => {
    allProduct();
    onSubmit()
  }, []);


   const onSubmit = async (data,event) =>{
     // http://localhost:3000/products
     try{
       let result=   await axios.post(`http://localhost:3000/stockIn/ `,data)
       event.preventDefault();
     
    console.log(result.data)
   }
   catch(err){
console.log(err,'dfs')
   }
    
    
  }

  const allProduct = async () => {
    const res = await axios.get("http://localhost:3000/products");
    setProducts(res.data);
    // console.log(res.data);
    if (res.data.length != 0) {
      res.data.map((item) => {
        ProductsName.push(item.ProductName);
        CompanyNames.push(item.CompanyName);
        Units.push(item.Unit);
       
        // console.log(item.ProductName);
      });
    }
  };




  return (
    <div className="">
       <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        {products.length != 0 ? (
          <div>
            <h1 className="text-center my-8 font-bold text-2xl">Stock In</h1>
            <Container>
              <Stack direction="row" spacing={2}>
                <TextField
                  type="number"
                  sx={{ width: 200 }}
                  id="outlined-basic"
                  label="Item code "
                  variant="outlined"
                  {...register("itemcode", { required: true, maxLength: 20 })}
                />
                <TextField
                  type="number"
                  sx={{ width: 200 }}
                  id="outlined-basic"
                  label="Supplier Doc No"
                  variant="outlined"
                  {...register("suplierNo", { required: true, maxLength: 20 })}
                />

                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  getOptionLabel={(ProductsName) => ProductsName || ""}

                  options={ProductsName}
                  sx={{ width: 200 }}
                  //  {...register("suplier", { required: true, maxLength: 20 })}
                  renderInput={(params) => (
                    <TextField {...params} label="Supplire" />
                  )}
                />









                <Autocomplete
           
                  id="combo-box-demo"
                 
                  getOptionLabel={(ProductsName) => ProductsName || ""}
                 
                  options={ProductsName}
                
                  sx={{ width: 200 }}
                  renderInput={(params) => (
                    <TextField {...params} label="Add Products " />
                  )}
                //  {...register("addproduct", { required: true, maxLength: 20 })}
                />


                      


                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                 
                  getOptionLabel={(ProductsName) => ProductsName || ""}
                  
                  options={ProductsName}
                  filterSelectedOptions
                  sx={{ width: 200 }}
                  renderInput={(params) => (
                    <TextField {...params} label="Product Type" />
                  )}
                   // {...register("productType", { required: true, maxLength: 20 })}
                />


              </Stack>
              <Stack direction="row" spacing={2} mt="10px">
          
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  name="Product Unit"
                  control={control}
                  options={Units} 
                  type="number"
                  getOptionLabel={(ProductsName) => ProductsName || ""}
                
                  
                  sx={{ width: 200 }}
                  renderInput={(params) => (
                    <TextField {...params} label="Product Unit" />
                  )}
                  {...register("ProductUnit")} 
                />
             
            
     
                   
                <TextField
                  {...register("Price")} 
                   type="number"
                  name="Price"
                  sx={{ width: 200 }}
                  id="outlined-basic"
                   label="Price"
                  variant="outlined"
                  {...register("Price", { required: true, maxLength: 20 })}
                />
                
                <TextField
                  type="number"
                  sx={{ width: 200 }}
                  id="outlined-basic"
                  label="QUANTITY"
                  variant="outlined"
                  {...register("quantity", { required: true, maxLength: 20 })}

                />
                <TextField
                  type="number"
                  sx={{ width: 200 }}
                  id="outlined-basic"
                  label="Expiry"
                  variant="outlined"
                  {...register("expriy", { required: true, maxLength: 20 })}
                />
              </Stack>
              <div className="mt-3 ali">
                <center>
                  
                  <Button type="submit" variant="contained" alignitems="center">
                    Submit
                  </Button>
                </center>
              </div>
            </Container>
          </div>
        ) : null}
      </div>

      <div className="mx-3">
        <div
          style={{
            height: 800,
            width: "100%",
            marginTop: "10px",
            padding: "5px",
          }}
        >
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10]}
            // checkboxSelection
          />
        </div>
      </div>
      <center>
     
        <button  className=" text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-10 mb-1 mt-1 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 relative ">
          Print
        </button>
      </center>
      </form>
    </div>
  );
};
export default Stockin;

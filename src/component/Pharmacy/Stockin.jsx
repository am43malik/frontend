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
import {  useForm } from "react-hook-form";
// import { useGetProductsQuery, useUpdatePostMutation } from "../../services/stockin";
import MaterialTable from 'material-table'
const columns = [
  { field: "id", headerName: "SrNO", width: 100 },
  { field: "itemcode", headerName: " itemcode", width: 130 },
  { field: "suplierNo", headerName: " suplierNo", width: 130 },
  { field: "addproduct", headerName: " addproduct", width: 130 },
  { field: "productType", headerName: " productType", width: 130 },
{ field: "productUnit", headerName: " productUnit", width: 130 },

  { field: "Price", headerName: " Price", width: 130 },

  { field: "quantity", headerName: " quantity", width: 130 },
  { field: "expriy", headerName: " name", width: 130 },


];
var row = [];
// var id=[]
var ProductsName = [];
var CompanyNames = [];
var Units = [];
const Stockin = () => {

  const [products, setProducts] = useState([]);
  const [item, setItem] = useState([]);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  // const [ UpdatePost,response] = useUpdatePostMutation()

  // const { data, isLoading } = useGetProductsQuery();
  // console.log(data,'llkk')
  // if (!isLoading) {
  //   for (let i = 0; i < data.length; i++) {
     
  //     row.push(data[i]);
      
  //     // console.log(id)


  //   }
  // }





 

  const onSubmit = async (stock) => {
  //  console.log(stock,'stock')
   if( stock.length !=0 && stock !=''){
    const result= await axios.post('http://localhost:3000/stockIn',stock)
    console.log(result,'dsfgsd')
   }
   else{
    alert('No data')
   }
    
    // setItem()
  
    
  };
  // console.log(UpdatePost,'jsdh')

  const allProduct = async () => {
    const res = await axios.get("http://localhost:3000/products");
    setProducts(res.data);
   
    if (res.data.length != 0) {
      res.data.map((item) => {
        ProductsName.push(item.ProductName);
        CompanyNames.push(item.CompanyName);
        Units.push(item.Unit);
      });
    }
  };



  const getitem = async()=>{
    const re= await axios.get('http://localhost:3000/stockIn')
    console.log(re,'dsfgsd')
    setItem(re.data)
  }
  console.log(item,'item')
  useEffect(() => {
    allProduct();
    getitem()
     onSubmit();
  }, []);
  return (
    <div className="">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          {/* {products.length != 0 ? ( */}
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
                    {...register("suplierNo", {
                      required: true,
                      maxLength: 20,
                    })}
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
                    <Button
                      type="submit"
                      variant="contained"
                      alignitems="center"
                    >
                      Submit
                    </Button>
                  </center>
                </div>
              </Container>
            </div>
          {/* ) : null} */}
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
            {/* {data != 0 ? ( */}
              <DataGrid
                rows={item}
                // {console.log(data)}
                // getRowId={(id) => id}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[10]}
                // checkboxSelection
              />
            {/* // ) : null} */}
            {/* {
             
                <MaterialTable
                columns={columns}
                data={item}
                title="Demo Title"
              />
             
            } */}


          </div>
        </div>
        <center>
          <button className=" text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-10 mb-1 mt-1 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 relative ">
            Print
          </button>
        </center>
      </form>
    </div>
  );
};
export default Stockin;

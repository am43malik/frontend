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
import { useForm } from "react-hook-form";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';





// import { useGetProductsQuery, useUpdatePostMutation } from "../../services/stockin";
import MaterialTable from "material-table";
const columns = [
  { field: "id", headerName: "SrNO", width: 100 },
  { field: "itemcode", headerName: " Itemcode", width: 130 },
  { field: "suplierNo", headerName: " SuplierNo", width: 130 },
  { field: "suplier", headerName: " Suplier", width: 130 },
  { field: "addproduct", headerName: " Addproduct", width: 130 },
  { field: "typeproduct", headerName: " Product Type", width: 130 },
  { field: "productunit", headerName: " Product Unit", width: 130 },
  { field: "Price", headerName: " Price", width: 130 },
  { field: "quantity", headerName: " Quantity", width: 130 },
  { field: "expriy", headerName: " Expriy", width: 130 },
];
// const array=[]
var row = [];
// var id=[]
var ProductsName = [];
var CompanyNames = [];
var Units = [];
//  var obj = [];
const Stockin = () => {
  const [products, setProducts] = useState([]);
  const [item, setItem] = useState([]);
  const [suplier, setSupplier] = useState();
  const [addproduct, setAddproduct] = useState();
  const [typeproduct, setTypeproduct] = useState();
  const [productunit, setProductunit] = useState();
  const [array ,setArray]=useState([])
  // const [obj ,setObj]=useState([])

 var grandTotal=[]
// var obj={}
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const handleChange = (event) => {
    if (event.target.value >= 0) {
    } else {
    }

  };

  const onSubmit =  (stock) => {
    
   var obj={
    suplier,
    addproduct,
    typeproduct,
    productunit,
    ...stock

   }
  //  setArray(obj)
array.push(obj)
 

  };
  const handelclick=()=>{
  console.log(array,'arraynew')
  }
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

  // const getitem = async () => {
  //   const re = await axios.post("http://localhost:3000/stockIn");
  //   // console.log(re, "dsfgsd");
  //   setItem(re.data);
  // };
  // // console.log(item, "item");
  useEffect(() => {
    allProduct();
    // getitem();
    // onSubmit();
  }, []);
  console.log(array,'array')
  return (
    <div className="">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div>
            <h1 className="text-center my-8 font-bold text-2xl">Stock In</h1>
            <Container>
              <Stack direction="row" spacing={2}>
                {/* <TextField
                  type={"number"}
                  // value={1}
                  // onChange={(t) => {
                  //   handleChange(t);
                  // }}
                  sx={{ width: 200 }}
                  id="outlined-basic"
                  label="Item code "
                  variant="outlined"
                  // {...register("itemcodenumber", { required: true, maxLength: 20 })}
                /> */}
                <TextField
                  type="number"
                  //  value={value}
                  // disablePortal
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
                  value={suplier}
                  onChange={(event, newValue) => {
                    setSupplier(newValue);
                  }}
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
                  value={addproduct}
                  onChange={(event, newValue) => {
                    setAddproduct(newValue);
                  }}
                  getOptionLabel={(ProductsName) => ProductsName || ""}
                  options={ProductsName}
                  sx={{ width: 200 }}
                  renderInput={(params) => (
                    <TextField {...params} label="Add Products " />
                  )}
                />

                <Autocomplete
                  id="combo-box-demo"
                  value={typeproduct}
                  onChange={(event, newValue) => {
                    setTypeproduct(newValue);
                  }}
                  getOptionLabel={(ProductsName) => ProductsName || ""}
                  options={ProductsName}
                  sx={{ width: 200 }}
                  renderInput={(params) => (
                    <TextField {...params} label="Product Type" />
                  )}
                />
              </Stack>
              <Stack direction="row" spacing={2} mt="10px">
                <Autocomplete
                  id="combo-box-demo"
                  // disablePortal
                  value={productunit}
                  onChange={(event, newValue) => {
                    setProductunit(newValue);
                  }}
                  options={Units}
                  type="number"
                  getOptionLabel={(ProductsName) => ProductsName || ""}
                  sx={{ width: 200 }}
                  renderInput={(params) => (
                    <TextField {...params} label="Product Unit" />
                  )}
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
                  <Button  onClick={handelclick} variant="contained" alignitems="center">
                    Submit
                  </Button>
                </center>
              </div>
            </Container>
          </div>
  
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
          
            {/* {obj.length != 0 ? (
              <>
                <DataGrid
                  rows={obj}
                  columns={columns}
                  pageSize={10}
                  rowsPerPageOptions={[100]}
                  // checkboxSelection
                />
              </>
            ) : null} */}
           
                  <div > 
                 <TableContainer component={Paper}>
      <Table sx={{ minWidth: 300 }} aria-label="simple table">
        <TableHead>
          <TableRow>
          {/* <TableCell align="right">Id</TableCell> */}
           
            <TableCell align="right">Id</TableCell>
            <TableCell align="right">SuplierNo</TableCell>
            <TableCell align="right">Suplier</TableCell>
            <TableCell align="right">Addproduct</TableCell>
            <TableCell align="right">Product Type</TableCell>
            <TableCell align="right">Product Unit</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right"> Quantity</TableCell>
            <TableCell align="right"> Expriy</TableCell>
            <TableCell align="right"> Total</TableCell>
            <TableCell align="right"> Delete</TableCell>


          </TableRow>
        </TableHead>
        <TableBody>
          {array?.map((row,id) => (
            <TableRow
              key={id}
              // sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
            

              <TableCell align="right">{id+1}</TableCell>
              <TableCell align="right">{row.suplierNo}</TableCell>
              <TableCell align="right">{row.suplier}</TableCell>
              <TableCell align="right">{row.addproduct}</TableCell>
              <TableCell align="right">{row.typeproduct}</TableCell>
              <TableCell align="right">{row.productunit}</TableCell>
              <TableCell align="right">{row.Price}</TableCell>
              <TableCell align="right">{row.quantity}</TableCell>
              <TableCell align="right">{row.expriy}</TableCell>
              <TableCell align="right">{row.quantity * row.Price }</TableCell>

              <TableCell align="right">
              <button align="right" onClick={()=>{
           setArray(array.filter((i)=> row.suplierNo !== i.suplierNo))
          //  alert(id)
              }}>
          
             <DeleteIcon/>
              </button>
              </TableCell>

             
           
             
             

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
                  
                  </div>
               
 
        {console.log(array,'kkkkk')}
           
          </div>
        </div>
        <div className='flex justify-center'> 
        <center> <button type="submit" className=" text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-10 mb-1 mt-1 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 relative mx-2 ">Print </button></center> 
      <center> <button type="submit" className=" text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-10 mb-1 mt-1 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 relative ">Save </button></center> 
      <center> <button type="submit" className=" text-white bg-red-500 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-10 mb-1 mt-1 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 relative mx-3">Grand Total = </button></center>
        </div>
       



      </form>
    </div>
  );
};
export default Stockin;

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const stockinApi = createApi({
  reducerPath: 'stockinApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/stockIn' }),
  endpoints: (builder) => ({
    getProducts : builder.query({
      query:()=>({
        url:'stockin',
        method:'GET'
      })
    }),
    updatePost : builder.mutation({
      query:(stock)=>{
        console.log(stock,'atk mutation')
        return{
        url:'stockin',
        method:'POST',
        body: stock,
      }
        

      }
    }),
  }),
})


export const { useGetProductsQuery, useUpdatePostMutation } = stockinApi
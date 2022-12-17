import { configureStore } from '@reduxjs/toolkit'

import { setupListeners } from '@reduxjs/toolkit/query'
import { stockinApi } from '../services/stockin'

export const store = configureStore({
  reducer: {
   
    [stockinApi.reducerPath]: stockinApi.reducer,
  },
  
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(stockinApi.middleware),
})


setupListeners(store.dispatch)
import { configureStore } from '@reduxjs/toolkit'
import UserSlice from './reducer/UserSlice'
import ProductReducer from './reducer/ProductReducer'
export const store = configureStore({
    reducer: {
    UserReducer: UserSlice,
      ProductReducer: ProductReducer,
  },
})
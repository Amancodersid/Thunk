import { configureStore } from '@reduxjs/toolkit'
import getproductslice from './AllproductSlice'
export const store = configureStore({
    reducer: {
        getALLproduct:getproductslice
    }
})
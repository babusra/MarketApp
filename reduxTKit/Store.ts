
import { configureStore } from "@reduxjs/toolkit";
import FilterSlice from "./features/FilterSlice";
import ProductSlice from "./features/ProductSlice";


export const Store = configureStore({
    reducer:{
        product:ProductSlice,
        filter:FilterSlice
       
    }
})

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
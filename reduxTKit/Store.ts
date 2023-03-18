
import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./features/ProductSlice";


export const Store = configureStore({
    reducer:{
        product:ProductSlice,
       
    }
})

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
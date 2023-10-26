import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./slice/categoriesSlice"
import productsReducer from "./slice/productSlice"

export const store = configureStore({
    reducer:{
        categories: categoriesReducer,
        products: productsReducer
    }
})


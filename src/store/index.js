import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./slice/categoriesSlice"
import productsReducer from "./slice/productSlice"
import cartReducer from "./slice/cartSlice"

export const store = configureStore({
    reducer:{
        categories: categoriesReducer,
        products: productsReducer,
        cart: cartReducer
    }
})


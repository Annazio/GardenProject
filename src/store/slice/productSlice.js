import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"


const initialState ={
    list: []
}

export const fetchProducts = createAsyncThunk(
    'product/fetchProduct',
    async () => {
        const response = await fetch ('http://localhost:3333/products/all')
        const  data = await response.json();
        return data
    }
)


export const productSlice = createSlice({
    name: 'product',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status ='loading'
            })
            .addCase(fetchProducts.fulfilled, (state, {payload}) => {
                state.status ='ready';
                state.list = payload;
            })
            .addCase(fetchProducts.rejected, (state) => {
                state.status ='error'
            })
    }
})

export default productSlice.reducer
   
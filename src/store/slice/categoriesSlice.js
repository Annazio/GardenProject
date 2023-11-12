import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"


const initialState ={
    list: [],
    title: "",
    productsList: []
}


export const fetchCategories = createAsyncThunk(
    'category/fetchCategory',
    async() => {
        const response = await fetch ('http://localhost:3333/categories/all')
        const data = await response.json();
        return data
    }  
)

export const fetchCategoryById = createAsyncThunk(
    'category/fetchCategoryById',
    async(id) => {
        const response = await fetch (`http://localhost:3333/categories/${id}`)
        const data = await response.json();
        return data
    }  
)

export const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        priceFilter(state, {payload}){
            state.productsList = state.productsList.map(elem => ({
                ...elem,
                show: {
                    ...elem.show,
                    price: elem.price >= payload.min && elem.price <= payload.max
                }
            }))
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategories.pending, (state) => {
                state.status ='loading'
            })
            .addCase(fetchCategories.fulfilled, (state, {payload}) => {
                state.status ='ready';
                state.list = payload;
            })
            .addCase(fetchCategories.rejected, (state) => {
                state.status ='error'
            })
            .addCase(fetchCategoryById.pending, (state) => {
                state.status ='loading'
            })
            .addCase(fetchCategoryById.fulfilled, (state, {payload}) => {
                state.status ='ready';
                const show = {price: true};
                state.productsList = payload.data.map((elem) => ({...elem, show}));
                state.title = payload.category.title;
            })
            .addCase(fetchCategoryById.rejected, (state) => {
                state.status ='error'
            })
    }
})


export default categorySlice.reducer;
export const {priceFilter} = categorySlice.actions;

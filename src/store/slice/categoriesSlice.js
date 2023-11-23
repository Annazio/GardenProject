import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"


const initialState ={
    list: [],
    title: "",
    productsList: []
}

export const fetchCategories = createAsyncThunk(
    'category/fetchCategory',
    async(_, { rejectWithValue }) => {
        try {
        const response = await fetch ('http://localhost:3333/categories/all')
        const data = await response.json();
        return data;
        } catch (error) {
            console.error(error);
            return rejectWithValue ({ message: "error fetch all categories" })
        }
    }  
)

export const fetchCategoryById = createAsyncThunk(
    'category/fetchCategoryById',
    async(id, { rejectWithValue }) => {
        try{
        const response = await fetch (`http://localhost:3333/categories/${id}`)
        const data = await response.json();
        return data;
        } catch (error){
          console.error(error);
          return rejectWithValue({ message: "error fetch single category" });
        }
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
        },
        discountHandler(state, {payload}){
          state.productsList = state.productsList.map((elem) => ({
            ...elem,
            show: {
              ...elem.show,
              checked: payload ? !!elem.discont_price : true,
            }
          }));
        },
        sort(state, {payload}){
          if (payload === 1){
           state.productsList.sort((a, b) => a.title.localeCompare(b.title))
          }else if (payload === 2){
            state.productsList.sort((a, b) => b.title.localeCompare(a.title))
          }else if (payload === 3){
            state.productsList.sort((a, b) => a.price - b.price)
          }else if (payload === 4){
            state.productsList.sort((a, b) => b.price - a.price)
          }else{
            state.productsList.sort((a, b) => a.id - b.id)
          }
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
                const show = { price: true, checked: true };
                state.productsList = payload.data.map((elem) => ({...elem, show}));
                state.title = payload.category.title;
            })
            .addCase(fetchCategoryById.rejected, (state) => {
                state.status ='error'
            })
    }
})


export default categorySlice.reducer;
export const {priceFilter,  sort, discountHandler} = categorySlice.actions;

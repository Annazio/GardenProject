import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
  productId: "",
  singleProduct: {},
  status: null,
};

export const fetchProducts = createAsyncThunk(
  "product/fetchProduct",
  async () => {
    const response = await fetch("http://localhost:3333/products/all");
    const data = await response.json();
    return data;
  }
);

export const fetchSingleProduct = createAsyncThunk(
  "product/fetchSingleProduct",
  async (productId, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `http://localhost:3333/products/${productId}`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      return rejectWithValue({ message: "error fetch single product" });
    }
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getProductId(state, { payload }) {
      state.productId = payload;
    },
    priceFilter(state, { payload }) {
      state.list = state.list.map((elem) => ({
        ...elem,
        show: {
          ...elem.show,
          price: elem.price >= payload.min && elem.price <= payload.max,
        },
      }));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, { payload }) => {
        state.status = "ready";
        const show = { price: true };
        state.list = payload.map((elem) => ({ ...elem, show }));
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.status = "error";
      });
    builder
      .addCase(fetchSingleProduct.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchSingleProduct.fulfilled, (state, actions) => {
        state.status = "ready";
        state.singleProduct = actions.payload[0];
      })
      .addCase(fetchSingleProduct.rejected, (state) => {
        state.status = "error";
      });
  },
});

export default productSlice.reducer;
export const { getProductId } = productSlice.actions;
export const { priceFilter } = productSlice.actions;




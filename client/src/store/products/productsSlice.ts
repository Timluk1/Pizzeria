import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../../types";
import { fetchAllProducts } from "./asyncActions";

interface InitialState {
    products: Product[]
    loading: boolean | null,
    error: string
}

const initialState: InitialState = {
    products: [...Array(6)],
    loading: null,
    error: "",
}

export const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAllProducts.pending, (state) => {
            state.loading = true;
            state.error = "";
        });

        builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
            state.products = action.payload;
            state.loading = false;
            state.error = "";
        });
    },
});


export default productsSlice.reducer;

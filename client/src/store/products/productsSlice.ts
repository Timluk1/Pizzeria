import { createSlice } from "@reduxjs/toolkit";
import { InitialStateProducts, AuthErrorResponse } from "../../types";
import { fetchProducts } from "./asyncActions";

// Извлекаем из localstorage данные о пользователе
const initialState: InitialStateProducts = {
    loading: false,
    products: [],
    error: null,
};

export const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true;
        })
        
        builder
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
        })

        builder
            .addCase(fetchProducts.rejected, (state, action) => {
                state.loading = false;
                if (action.payload) {
                    const dataError: AuthErrorResponse = action.payload;
                    switch (dataError.message) {
                        case "Token has expired, please refresh it":
                            
                    }
                }
        })  
    }
});

export default productsSlice.reducer;

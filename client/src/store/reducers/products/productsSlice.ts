import { createSlice } from "@reduxjs/toolkit";
import { InitialStateProducts } from "./types";
import { fetchProducts } from "./asyncActions";

// Извлекаем из localstorage данные о пользователе
const initialState: InitialStateProducts = {
    loading: false,
    productsData: [],
    error: null
}

export const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        clearProductsData: (state) => {
            state.productsData = [];
        }
    },
    extraReducers: (builder) => {
        // получение продуктов
        builder
            .addCase(fetchProducts.pending, (state) => {
                // загрузка
                state.loading = true;
            })

        builder
            .addCase(fetchProducts.fulfilled, (state, action) => {
                // окончание загрузки
                state.loading = false;
                // устновливаем в сотояние полученные с сервера продукты
                state.productsData = action.payload;
            })

        builder
            .addCase(fetchProducts.rejected, (state) => {
                // товары не загрузились
                state.loading = false;
            })
    }
});

export const productsActions = productsSlice.actions;
export const productsReducer = productsSlice.reducer;
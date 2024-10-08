import { createSlice } from "@reduxjs/toolkit";
import { fetchCart, addProductToCart, deleteProductFromCart, deleteFullCart } from "./asyncActions";
import { FetchCartStateI, AddProductToCartDetailedState } from "./types";

const fetchCartState: FetchCartStateI = {
    loading: false,
    productsCart: null,
    error: null
}

const addProductToCartDetailedState: AddProductToCartDetailedState = {
    loading: false,
    productIdState: null,
    doughTypeState: null,
    sizeTypeState: null,
    error: null
}

const clearAllCart = {
    loading: false,
    error: null
}

const initialState = {
    cart: fetchCartState,
    addProductToCartDetailed: addProductToCartDetailedState,
    clearAllCart: clearAllCart,
    cartLength: 0,
    cartSum: 0
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        clearCart: (state) => {
            state.cart.productsCart = null;
        }
    },
    extraReducers: (builder) => {
        // получение корзины
        builder
            .addCase(fetchCart.pending, (state) => {
                state.cart.loading = true;
            })

        builder
            .addCase(fetchCart.fulfilled, (state, action) => {
                state.cart.loading = false;
                state.cart.productsCart = action.payload.products;
                state.cartLength = state.cart.productsCart.reduce((sum: number, { quantity }) => sum + quantity, 0);
                state.cartSum = state.cart.productsCart.reduce((sum: number, { quantity, price }) => sum + (quantity * price), 0);
            })

        builder
            .addCase(fetchCart.rejected, (state, action) => {
                state.cart.loading = false;
                if (action.payload) {
                    state.cart.error = action.payload;
                }
            })

        // добавление товара в корззину
        builder
            .addCase(addProductToCart.pending, (state, action) => {
                state.addProductToCartDetailed.loading = true;
                const { productId, doughType, sizeType } = action.meta.arg;
                state.addProductToCartDetailed.doughTypeState = doughType;
                state.addProductToCartDetailed.sizeTypeState = sizeType;
                state.addProductToCartDetailed.productIdState = productId;
            })

        builder
            .addCase(addProductToCart.fulfilled, (state, action) => {
                state.addProductToCartDetailed.loading = false;
                state.cart.productsCart = action.payload.products;
                state.cartLength = state.cart.productsCart.reduce((sum: number, { quantity }) => sum + quantity, 0);
                state.cartSum = state.cart.productsCart.reduce((sum: number, { quantity, price }) => sum + (quantity * price), 0);
            })

        builder
            .addCase(addProductToCart.rejected, (state) => {
                state.addProductToCartDetailed.loading = false;
            })

        // удаление товара из корзины
        builder
            .addCase(deleteProductFromCart.pending, (state, action) => {
                state.addProductToCartDetailed.loading = true;
                const { productId, doughType, sizeType } = action.meta.arg;
                state.addProductToCartDetailed.doughTypeState = doughType;
                state.addProductToCartDetailed.sizeTypeState = sizeType;
                state.addProductToCartDetailed.productIdState = productId;
            })

        builder
            .addCase(deleteProductFromCart.fulfilled, (state, action) => {
                state.addProductToCartDetailed.loading = false;
                state.cart.productsCart = action.payload.products;
                state.cartLength = state.cart.productsCart.reduce((sum: number, { quantity }) => sum + quantity, 0);
                state.cartSum = state.cart.productsCart.reduce((sum: number, { quantity, price }) => sum + (quantity * price), 0);
            })

        builder
            .addCase(deleteProductFromCart.rejected, (state) => {
                state.addProductToCartDetailed.loading = false;
            })
        // полная очистка корзины
        builder
            .addCase(deleteFullCart.pending, (state) => {
                state.clearAllCart.loading = true;
            })

        builder
            .addCase(deleteFullCart.fulfilled, (state) => {
                state.clearAllCart.loading = false;
                state.cart.productsCart = [];
                state.cartLength = 0;
                state.cartSum = 0;
            })

        builder
            .addCase(deleteFullCart.rejected, (state) => {
                state.clearAllCart.loading = false;
            })
    }
});

export const cartActions = cartSlice.actions
export const cartReducer = cartSlice.reducer;
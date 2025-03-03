import { createAsyncThunk } from '@reduxjs/toolkit'
import { AuthErrorResponse, CartRequest, CartResponse } from './types';
import { axiosWithAuth } from '../../../utils/axios/interceptors';

const fetchCart = createAsyncThunk<CartResponse, void, { rejectValue: AuthErrorResponse }>(
    'cart/fetchCart',
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await axiosWithAuth.get<CartResponse>("/cart");
            return data;
        } catch (error) {
            return rejectWithValue(error as AuthErrorResponse)
        }
    }
)

const addProductToCart = createAsyncThunk<CartResponse, CartRequest, { rejectValue: AuthErrorResponse }>(
    'cart/addProductToCart',
    async ({ productId, doughType, sizeType, quantity }, { rejectWithValue }) => {
        try {
            const productData = {
                productId,
                doughType: doughType,
                sizeType: sizeType,
                quantity: quantity,
            }

            const { data } = await axiosWithAuth.post<CartResponse>("/cart", productData)
            return data;
        } catch (error) {
            return rejectWithValue(error as AuthErrorResponse)
        }
    }
)

const deleteProductFromCart = createAsyncThunk<CartResponse, CartRequest, { rejectValue: AuthErrorResponse }>(
    'cart/deleteProductFromCart',
    async ({ productId, doughType, sizeType, quantity }, { rejectWithValue }) => {
        try {
            const productData = {
                productId,
                doughType: doughType,
                sizeType: sizeType,
                quantity: quantity,
            }

            const { data } = await axiosWithAuth.delete<CartResponse>("/cart", { data: productData });
            return data;
        } catch (error) {
            return rejectWithValue(error as AuthErrorResponse)
        }
    }
)

const deleteFullCart = createAsyncThunk<CartResponse, void, { rejectValue: AuthErrorResponse }>(
    'cart/deleteFullCart',
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await axiosWithAuth.delete<CartResponse>("/fullcart");
            return data;
        } catch (error) {
            return rejectWithValue(error as AuthErrorResponse)
        }
    }
)

export { fetchCart, addProductToCart, deleteProductFromCart, deleteFullCart };
import { createAsyncThunk } from '@reduxjs/toolkit'
import {  AuthErrorResponse, CartRequest, CartResponse } from './types';

const API_PATH = import.meta.env.VITE_API_PATH;

const fetchCart = createAsyncThunk<CartResponse, void, { rejectValue: AuthErrorResponse }>(
    'cart/fetchCart',
    async (_, { rejectWithValue }) => {
        
        // access token
        const authData = {
            authorization: "Bearer " + localStorage.getItem("accessToken"),
        };
        
        const res = await fetch(`${API_PATH}/cart`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                ...authData,
            },
            credentials: "include", // Включаем cookie в запрос
        });

        const data = await res.json();

        if (!res.ok) {
            // Обработка ошибок HTTP
            return rejectWithValue(data);
        }

        return data;
    }
)

const addProductToCart = createAsyncThunk<CartResponse, CartRequest, { rejectValue: AuthErrorResponse }>(
    'cart/addProductToCart',
    async ({productId, doughType, sizeType, quantity }, { rejectWithValue }) => {
        // access token
        const productData = {
            productId, 
            doughType: doughType,
            sizeType: sizeType,
            quantity: quantity,
        }

        const authData = {
            authorization: "Bearer " + localStorage.getItem("accessToken"),
        };
        
        const res = await fetch(`${API_PATH}/cart`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                ...authData, // Add authorization header directly
            },
            body: JSON.stringify(productData),
            credentials: "include", // Включаем cookie в запрос
        });

        const data = await res.json();

        if (!res.ok) {
            // Обработка ошибок HTTP
            return rejectWithValue(data);
        }
        return data;
    }
)

const deleteProductFromCart = createAsyncThunk<CartResponse, CartRequest, { rejectValue: AuthErrorResponse }>(
    'cart/deleteProductFromCart',
    async ({productId, doughType, sizeType, quantity }, { rejectWithValue }) => {
        // access token
        const productData = {
            productId, 
            doughType: doughType,
            sizeType: sizeType,
            quantity: quantity,
        }

        const authData = {
            authorization: "Bearer " + localStorage.getItem("accessToken"),
        };
        
        const res = await fetch(`${API_PATH}/cart`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                ...authData, // Add authorization header directly
            },
            body: JSON.stringify(productData),
            credentials: "include", // Включаем cookie в запрос
        });

        const data = await res.json();

        if (!res.ok) {
            // Обработка ошибок HTTP
            return rejectWithValue(data);
        }
        return data;
    }
)

const deleteFullCart = createAsyncThunk<CartResponse, void, { rejectValue: AuthErrorResponse }>(
    'cart/deleteFullCart',
    async (_, { rejectWithValue }) => {
        const authData = {
            authorization: "Bearer " + localStorage.getItem("accessToken"),
        };
        
        const res = await fetch(`${API_PATH}/fullCart`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                ...authData, // Add authorization header directly
            },
            credentials: "include", // Включаем cookie в запрос
        });

        const data = await res.json();


        if (!res.ok) {
            // Обработка ошибок HTTP
            return rejectWithValue(data);
        }
        return data;
    }
)

export { fetchCart, addProductToCart, deleteProductFromCart, deleteFullCart };
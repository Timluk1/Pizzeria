import { createAsyncThunk } from '@reduxjs/toolkit'
import { ProductType, AuthErrorResponse } from "./types";

const API_PATH = import.meta.env.VITE_API_PATH;

const fetchProducts = createAsyncThunk<ProductType[], void, { rejectValue: AuthErrorResponse }>(
    'products/fetchProducts',
    async (_, { rejectWithValue }) => {
        
        // access token
        const authData = {
            authorization: "Bearer " + localStorage.getItem("accessToken"),
        };
        
        const res = await fetch(`${API_PATH}/products`, {
            method: "GET",
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

export { fetchProducts };
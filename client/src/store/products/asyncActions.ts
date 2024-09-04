import { createAsyncThunk } from '@reduxjs/toolkit'
import { ProductType, AuthErrorResponse } from "../../types";

export const fetchProducts = createAsyncThunk<ProductType[], void, { rejectValue: AuthErrorResponse }>(
    'users/fetchProducts',
    async (_, { rejectWithValue }) => {
        
        // access token
        const authData = {
            authorization: "Bearer " + localStorage.getItem("accessToken"),
        };
        
        const res = await fetch("http://localhost:4000/api/products", {
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
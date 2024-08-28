import { createAsyncThunk } from "@reduxjs/toolkit";
import { Product } from "../../types";

export const fetchAllProducts = createAsyncThunk<Product[], undefined>(
    "products/fetchAllProducts",
    async (_, { rejectWithValue }) => {
        try {
            const response = await fetch("http://localhost:4000/products");
            if (!response.ok) {
                // Обработка ошибок HTTP
                return rejectWithValue("Failed to fetch products");
            }
            const data: Product[] = await response.json();
            return data;
        } catch  {
            // Возвращаем ошибку через rejectWithValue
            return rejectWithValue("Failed to fetch products");
        }
    }
);

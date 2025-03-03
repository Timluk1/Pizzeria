import { createAsyncThunk } from '@reduxjs/toolkit'
import { ProductType, AuthErrorResponse } from "./types";
import { axiosWithAuth } from '../../../utils/axios/interceptors';

const fetchProducts = createAsyncThunk<ProductType[], void, { rejectValue: AuthErrorResponse }>(
    'products/fetchProducts',
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await axiosWithAuth.get<ProductType[]>("/products");
            return data;
        } catch (error) {
            return rejectWithValue(error as AuthErrorResponse)
        }
    }
)

export { fetchProducts };
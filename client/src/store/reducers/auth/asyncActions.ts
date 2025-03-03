import { createAsyncThunk } from '@reduxjs/toolkit';
import { AuthData, AuthResponse, AuthErrorResponse, } from "./types";
import { axiosBasic } from '../../../utils/axios/interceptors';
import { AxiosError } from 'axios';

const registration = createAsyncThunk<AuthResponse, AuthData, { rejectValue: AxiosError<AuthErrorResponse> }>(
    'users/registration',
    async (userData, { rejectWithValue }) => {
        try {   
            const { data } = await axiosBasic.post("/registration", userData);
            return data;
        } catch (error) {
            return rejectWithValue(error as AxiosError<AuthErrorResponse>);
        }
    }
);

const login = createAsyncThunk<AuthResponse, AuthData, { rejectValue: AxiosError<AuthErrorResponse> }>(
    'users/login',
    async (userData, { rejectWithValue }) => {
        try {
            const { data } = await axiosBasic.post("/login", userData);
            return data;
        } catch (error) {
            return rejectWithValue(error as AxiosError<AuthErrorResponse>);
        }
    }
);

export { registration, login };

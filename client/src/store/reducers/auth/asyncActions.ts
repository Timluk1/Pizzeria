import { createAsyncThunk } from '@reduxjs/toolkit';
import { AuthData, AuthResponse, AuthErrorResponse, isAccesTokenValidResponse } from "./types";

const API_PATH = import.meta.env.VITE_API_PATH;

const registration = createAsyncThunk<AuthResponse, AuthData, { rejectValue: AuthErrorResponse }>(
    'users/registration',
    async (userData, { rejectWithValue }) => {
        try {
            const res = await fetch(`${API_PATH}/registration`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userData),
                credentials: 'include'
            });

            const data = await res.json();

            if (!res.ok) {
                return rejectWithValue(data);
            }

            return data;
        } catch (error) {
            return rejectWithValue(error as AuthErrorResponse);
        }
    }
);

const login = createAsyncThunk<AuthResponse, AuthData, { rejectValue: AuthErrorResponse }>(
    'users/login',
    async (userData, { rejectWithValue }) => {
        try {
            const res = await fetch(`${API_PATH}/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userData),
                credentials: 'include'
            });

            const data = await res.json();

            if (!res.ok) {
                return rejectWithValue(data);
            }

            return data;
        } catch (error) {
            return rejectWithValue(error as AuthErrorResponse);
        }
    }
);

const validateAndRefreshToken = createAsyncThunk<AuthResponse, void, { rejectValue: AuthErrorResponse }>(
    'users/isAccesTokenValid',
    async (_, { rejectWithValue }) => {
        try {
            const authData = {
                authorization: "Bearer " + localStorage.getItem("accessToken"),
            };

            const res = await fetch(`${API_PATH}/access`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    ...authData,
                },
                credentials: "include",
            });

            const data: isAccesTokenValidResponse = await res.json();

            
            if (!data.isAccessTokenValid) {
                const res = await fetch(`${API_PATH}/refresh`, {
                    method: "GET",
                    credentials: "include",
                });

                const data = await res.json();
                return {refresh: true, ...data };
            }

            return {
                refresh: false,
                accessToken: String(localStorage.getItem("accessToken")) || "",
                user: {
                    email: String(localStorage.getItem("email")) || "",
                    id: String(localStorage.getItem("userId")) || "",
                }
            };
            
        } catch (error) {
            return rejectWithValue(error as AuthErrorResponse);
        }
    }
);

export { registration, login, validateAndRefreshToken };

import { createAsyncThunk } from '@reduxjs/toolkit';
import { AuthData, AuthResponse, AuthErrorResponse, isAccesTokenValidResponse } from "./types";

const registration = createAsyncThunk<AuthResponse, AuthData, { rejectValue: AuthErrorResponse }>(
    'users/registration',
    async (userData, { rejectWithValue }) => {
        try {
            const res = await fetch("http://localhost:4000/api/registration", {
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
            const res = await fetch("http://localhost:4000/api/login", {
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

            const res = await fetch("http://localhost:4000/api/access", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    ...authData,
                },
                credentials: "include",
            });

            const data: isAccesTokenValidResponse = await res.json();

            
            if (!data.isAccessTokenValid) {
                const res = await fetch("http://localhost:4000/api/refresh", {
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

import { createSlice } from "@reduxjs/toolkit";
import { InitialStateAuth } from "./types";
import { registration, login, validateAndRefreshToken } from "./asyncActions";
import { getErrorTextAuth } from '../../../utils/auth/authErrosHelps';

// Извлекаем из localstorage данные о пользователе
const initialState: InitialStateAuth = {
    isAuth: Boolean(localStorage.getItem("isAuth")) || false,
    loading: null,
    error: "",
    accessToken: String(localStorage.getItem("accesToken")) || "",
    email: String(localStorage.getItem("email")) || "",
    userId: String(localStorage.getItem("userId")) || "",
}


const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        clearError: (state) => {
            state.error = ""
        }
    },
    extraReducers: (builder) => {
        // Регистрация
        builder
            .addCase(registration.pending, (state) => {
                // Устанавливаем флаг загрузки в true во время запроса
                state.loading = true;
            })

        builder
            .addCase(registration.fulfilled, (state, action) => {
                // Устанавливаем флаг загрузки в false при успешном ответе
                state.loading = false;
                const { accessToken, user } = action.payload;
                state.isAuth = true; // Пользователь авторизован
                state.accessToken = accessToken; // Сохраняем accessToken
                state.email = user.email; // Сохраняем email пользователя
                state.userId = user.id; // Сохраняем ID пользователя

                localStorage.setItem("isAuth", "true");
                localStorage.setItem("accessToken", accessToken);
                localStorage.setItem("email", user.email);
                localStorage.setItem("userId", user.id);
            })

        builder
            .addCase(registration.rejected, (state, action) => {
                state.loading = false;
                if (action.payload) {
                    // если есть ошибка устанавливаем ее в сотояние
                    state.error = getErrorTextAuth(action.payload);
                }
            })

        // Вход в аккаунт
        builder
            .addCase(login.pending, (state) => {
                // Устанавливаем флаг загрузки в true во время запроса
                state.loading = true;
            })

        builder
            .addCase(login.fulfilled, (state, action) => {
                // Устанавливаем флаг загрузки в false при успешном ответе
                state.loading = false;
                const { accessToken, user } = action.payload;
                state.isAuth = true; // Пользователь авторизован
                state.accessToken = accessToken; // Сохраняем accessToken
                state.email = user.email; // Сохраняем email пользователя
                state.userId = user.id; // Сохраняем ID пользователя

                // устонавливаем в localstorage все данные
                localStorage.setItem("isAuth", "true");
                localStorage.setItem("accessToken", accessToken);
                localStorage.setItem("email", user.email);
                localStorage.setItem("userId", user.id);
            })

        builder
            .addCase(login.rejected, (state, action) => {
                state.loading = false;
                if (action.payload) {
                    // если есть ошибка устанавливаем ее в сотояние
                    state.error = getErrorTextAuth(action.payload);
                }
            })

        builder
            .addCase(validateAndRefreshToken.fulfilled, (state, action) => {
                // получаем данные
                const { refresh, accessToken, user } = action.payload;
                if (refresh) {
                    state.accessToken = accessToken;
                    state.email = user.email;
                    state.userId = user.id;

                    // устонавливаем в localstorage все данные
                    localStorage.setItem("accessToken", accessToken);
                    localStorage.setItem("email", user.email);
                    localStorage.setItem("userId", user.id);
                }
            })
        builder
            .addCase(validateAndRefreshToken.rejected, (state, action) => {
                state.loading = false;
                console.error("Token validation error:", action.payload);
                state.isAuth = false;

                // в случае ошибки по рефрешу токена пользователь становится не авторизованным
                localStorage.removeItem("isAuth");
                localStorage.removeItem("accessToken");
                localStorage.removeItem("email");
                localStorage.removeItem("userId");
            });
    }
})

export const authActions = authSlice.actions;
export const authReducer = authSlice.reducer;

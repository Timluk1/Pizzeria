import { createSlice } from "@reduxjs/toolkit";
import { InitialStateAuth } from "./types";
import { registration, login } from "./asyncActions";
import { getErrorTextAuth } from '../../../utils/auth/authErrosHelps';

// Извлекаем из localstorage данные о пользователе
const initialState: InitialStateAuth = {
    isAuth: Boolean(localStorage.getItem("isAuth")) || false,
    loading: null,
    error: "",
    email: String(localStorage.getItem("email")) || "",
    userId: String(localStorage.getItem("userId")) || "",
}


const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        clearError: (state) => {
            state.error = ""
        },
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
                const error = action.payload?.response?.data;
                if (error) {
                    // если есть ошибка устанавливаем ее в сотояние
                    state.error = getErrorTextAuth(error);
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
                const error = action.payload?.response?.data;
                if (error) {
                    // если есть ошибка устанавливаем ее в сотояние
                    state.error = getErrorTextAuth(error);
                }
            })
    }
})

export const authActions = authSlice.actions;
export const authReducer = authSlice.reducer;

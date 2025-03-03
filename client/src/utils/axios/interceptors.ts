import axios from "axios"
import { AuthResponse } from "../../store/reducers/auth/types";

const axiosBasic = axios.create({
    baseURL: import.meta.env.VITE_API_PATH,
    withCredentials: true,
    headers: { 'X-Custom-Header': 'foobar' }
});

const axiosWithAuth = axios.create({
    baseURL: import.meta.env.VITE_API_PATH,
    withCredentials: true,
    headers: { 'X-Custom-Header': 'foobar' }
});

// перехватчик для добавления токена в запрос
axiosWithAuth.interceptors.request.use((config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

// Перехватчик для обработки ошибок (обновление токена при 401)
axiosWithAuth.interceptors.response.use(
    (response) => response,
    async (error) => {
        if (error.response?.status === 401) {
            try {
                // Запрашиваем новый accessToken
                const { data } = await axiosBasic.get<AuthResponse>("/refresh");
                localStorage.setItem("accessToken", data.accessToken);

                // Обновляем токен в заголовках оригинального запроса
                error.config.headers.Authorization = `Bearer ${data.accessToken}`;

                // Повторяем оригинальный запрос
                return axiosWithAuth.request(error.config);
            } catch {
                // Если обновить токен не удалось — очищаем локальное хранилище
                localStorage.removeItem("isAuth");
                localStorage.removeItem("accessToken");
                localStorage.removeItem("email");
                localStorage.removeItem("userId");
            }
        }
        return Promise.reject(error);
    }
);

export { axiosBasic, axiosWithAuth };

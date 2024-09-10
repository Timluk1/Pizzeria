export interface AuthErrorResponse {
    status: string,
    statusCode: number,
    message: string
}

export interface InitialStateAuth {
    isAuth: boolean,
    loading: boolean | null,
    error: null | AuthErrorResponse,
    accessToken: string,
    email: string,
    userId: string,
}

export interface AuthData {
    email: string;
    password: string;
}

export interface isAccesTokenValidResponse {
    isAccessTokenValid: boolean
}

interface User {
    email: string;
    id: string;
}

export interface AuthResponse {
    refresh: boolean,
    accessToken: string; // Токен доступа
    user: User;
}
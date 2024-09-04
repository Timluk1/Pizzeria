export interface PropsButtonType {
    text: string;
    isActive: boolean;
    handleClick: (text: string) => void
}

interface DoughType {
    type: string;
    factor: number;
}

interface SizeType {
    size: number; 
    factor: number;
}

export interface ProductType {
    name: string; 
    imgPath: string; 
    doughTypes: DoughType[];
    sizeTypes: SizeType[]; 
    basePrice: number;
}

export interface AuthData {
    email: string;
    password: string;
}

export interface InitialStateProducts {
    products: ProductType[]
    loading: boolean | null,
    error: string | null
}

export interface InitialStateAuth {
    isAuth: boolean,
    loading: boolean | null,
    accessToken: string,
    email: string,
    userId: string,
}

interface User {
    email: string;
    id: string;
}

// Основной интерфейс для объекта с accessToken и user
export interface AuthResponse {
    accessToken: string; // Токен доступа
    user: User;   
}

export interface AuthErrorResponse {
    status: string,
    statusCode: number,
    message: string
}

export interface isAccesTokenValidResponse {
    isAccessTokenValid: boolean
}   

export interface paginationProps {
    activePage: number,
    setActivePage: (element: number) => void,
    numberOfPages: number
}

export interface doughTypes {
    type: string,
    factor: number,
    _id: string,
}

export interface sizeTypes {
    size: number,
    factor: number,
    _id: string,
}
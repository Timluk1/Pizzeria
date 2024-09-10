interface DoughType {
    type: string;
    factor: number;
}

interface SizeType {
    size: number;
    factor: number;
}

export interface ProductType {
    productId: string;
    quantityInCart: number;
    name: string;
    imgPath: string;
    // активный тип
    doughType?: DoughType;
    doughTypes: DoughType[];
    //активный размер
    sizeType?: SizeType;
    sizeTypes: SizeType[];
    basePrice: number;
}

export interface InitialStateProducts {
    productsData: ProductType[];
    loading: boolean | null;
    error: string | null;
}

export interface AuthErrorResponse {
    status: string;
    statusCode: number;
    message: string;
}

export interface CartRequest {
    productId: string;
    doughType: string;
    sizeType: number;
    quantity: number;
}

export interface Product {
    price: number;
    name: string;
    doughType: string,
    sizeType: number;
    quantity: number;
    imgPath: string;
    productId: string;
}

export interface CartResponse {
    userId: string;
    products: Product[];
}

export interface FetchCartStateI {
    loading: boolean;
    productsCart: Product[];
    error: null | AuthErrorResponse ;
}

export interface AddProductToCartDetailedState {
    loading: boolean;
    productIdState: null | string;
    doughTypeState: null | string;
    sizeTypeState: null | number;
    error: null | AuthErrorResponse ;
}
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
    productsData: ProductType[],
    loading: boolean | null,
    error: string | null
}

export interface AuthErrorResponse {
    status: string,
    statusCode: number,
    message: string
}

export interface CartRequest {
    productId: string,
    doughType: DoughType,
    sizeType: SizeType,
}

export interface CartResponse {
    price: number,
    doughType: string,
    sizeType: number,
    quantity: number
}

export interface PayloadChangeCountCart {
    newQuantity: number,
    productId: string
}
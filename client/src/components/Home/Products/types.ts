interface DoughType {
    type: string;
    factor: number;
}

interface SizeType {
    size: number;
    factor: number;
}

interface ProductType {
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

export interface ProductsProps {
    products: ProductType[];
}

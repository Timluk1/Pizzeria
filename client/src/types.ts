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

export interface Product {
    name: string; 
    imgPath: string; 
    doughTypes: DoughType[];
    sizeTypes: SizeType[]; 
}

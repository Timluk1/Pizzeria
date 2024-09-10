export interface ButtonAddProps {
    props: {
        quantityInCart: number;
        productId: string;
        onClickAddToCart: () => void;
    }
}
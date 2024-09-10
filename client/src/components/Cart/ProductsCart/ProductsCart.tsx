import ProductCart from "../ProductCart/ProductCart";
import { ProductsCartProps } from "./types";
import "./Products.scss";

function ProductsCart({ products }: ProductsCartProps) {
    const renderedProducts = products.map(
        ({
            productId,
            imgPath,
            price,
            quantity,
            doughType,
            sizeType,
            name,
        }) => {
            const key: string = productId + doughType + sizeType;
            const props = {
                productId,
                imgPath,
                price,
                quantity,
                doughType,
                sizeType,
                name,
            };
            return <ProductCart key={key} {...props} />;
        }
    );

    return <div className="products-cart">{renderedProducts}</div>;
}

export default ProductsCart;

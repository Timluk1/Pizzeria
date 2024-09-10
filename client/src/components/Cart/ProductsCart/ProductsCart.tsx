import { useEffect } from "react";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { fetchCart } from "../../../store/reducers/cart/asyncActions";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { validateAndRefreshToken } from "../../../store/reducers/auth/asyncActions";
import LoaderButton from "../../Helps/LoaderButton/LoaderButton";
import ProductCart from "../ProductCart/ProductCart";
import "./Products.scss";

function ProductsCart() {
    const dispatch = useAppDispatch();
    const cartProducts = useAppSelector((state) => state.cart.cart.productsCart);
    const loading = useAppSelector((state) => state.cart.cart.loading);

    useEffect(() => {
        async function fetchData() {
            await dispatch(validateAndRefreshToken());
            await dispatch(fetchCart());
        }
        fetchData();
    }, [dispatch]);

    const renderedProducts = cartProducts.map(({productId, imgPath, price, quantity, doughType, sizeType, name}) =>  {
        const key: string = productId + doughType + sizeType;
        const props = {productId, imgPath, price, quantity, doughType, sizeType, name};
        return <ProductCart key={key} {...props}/>
    });
    
    return (
    <div className="products-cart">
        {
        loading
        ?
        <LoaderButton color="#FE5F1E" size={180}/>
        :
        renderedProducts
        }
    </div>);
}

export default ProductsCart;

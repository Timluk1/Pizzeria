import Header from "../../components/Home/Header/Header";
import CartHeader from "../../components/Cart/CartHeader/CartHeader";
import ProductsCart from "../../components/Cart/ProductsCart/ProductsCart";
import CartFooter from "../../components/Cart/CartFooter/CartFooter";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import { useEffect } from "react";
import { fetchCart } from "../../store/reducers/cart/asyncActions";
import { validateAndRefreshToken } from "../../store/reducers/auth/asyncActions";
import LoaderButton from "../../components/Helps/LoaderButton/LoaderButton";
import { useNavigate } from "react-router-dom";  // Импорт useNavigate

function Cart() {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();  // Инициализация useNavigate
    const products = useAppSelector((state) => state.cart.cart.productsCart);
    const loading = useAppSelector((state) => state.cart.cart.loading);
    const loadingClearCart = useAppSelector((state) => state.cart.clearAllCart.loading);
    
    useEffect(() => {
        async function fetchData() {
            await dispatch(validateAndRefreshToken());
            await dispatch(fetchCart());
        }
        fetchData();
    }, [dispatch]);

    useEffect(() => {
        if (!loading && (products !== null && !products.length)) {
            console.log(products, loading)
            navigate("/empty-cart");
        }
    }, [loading, products, navigate]);

    return (
        <div className="cart">
            <Header />
            {
            loading || products === null || loadingClearCart
            ?
            <LoaderButton color="#FE5F1E" size={180}/>
            :
            <>  
                <CartHeader />
                <ProductsCart products={products}/>
                <CartFooter />
            </>
            }
        </div>
    );
}

export default Cart;

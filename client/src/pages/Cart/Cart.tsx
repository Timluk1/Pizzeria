import CartHeader from "../../components/Cart/CartHeader/CartHeader";
import ProductsCart from "../../components/Cart/ProductsCart/ProductsCart";
import CartFooter from "../../components/Cart/CartFooter/CartFooter";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import { useEffect } from "react";
import { fetchCart } from "../../store/reducers/cart/asyncActions";
import LoaderButton from "../../components/Helps/LoaderButton/LoaderButton";
import { Navigate, useNavigate } from "react-router-dom"; // Импорт useNavigate
import CartInformation from "../../components/Cart/CarInformation/CartInformation";

function Cart() {
    const dispatch = useAppDispatch();
    const navigate = useNavigate(); // Инициализация useNavigate
    const products = useAppSelector((state) => state.cart.cart.productsCart);
    const loading = useAppSelector((state) => state.cart.cart.loading);
    const loadingClearCart = useAppSelector(
        (state) => state.cart.clearAllCart.loading
    );
    const isAuth = useAppSelector((state) => state.auth.isAuth);

    useEffect(() => {
        async function fetchData() {
            await dispatch(fetchCart());
        }
        fetchData();
    }, [dispatch]);

    useEffect(() => {
        if (!loading && products !== null && !products.length) {
            navigate("/empty-cart");
        }
    }, [loading, products, navigate]);

    return isAuth ? (
        <div className="cart">
            {loading || products === null || loadingClearCart ? (
                <LoaderButton color="#FE5F1E" size={180} />
            ) : (
                <>
                    <CartHeader />
                    <ProductsCart products={products} />
                    <CartInformation />
                    <CartFooter />
                </>
            )}  
        </div>
    ) : (
        <Navigate to="/login" />
    );
}

export default Cart;

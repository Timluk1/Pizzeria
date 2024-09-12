import Products from "../../components/Home/Products/Products";
import { useAppSelector } from "../../hooks/useAppSelector";
import { validateAndRefreshToken } from "../../store/reducers/auth/asyncActions";
import { fetchProducts } from "../../store/reducers/products/asyncActions";
import { fetchCart } from "../../store/reducers/cart/asyncActions";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { Navigate } from "react-router-dom";
import { useEffect } from "react";
import TypesProduct from "../../components/Home/TypesProduct/TypesProduct";
import LoaderButton from "../../components/Helps/LoaderButton/LoaderButton";

function Home() {
    const isAuth = useAppSelector((state) => state.auth.isAuth);
    const dispatch = useAppDispatch();
    const productsLoading = useAppSelector((state) => state.products.loading);
    const products = useAppSelector((state) => state.products.productsData);

    useEffect(() => {
        // Создаем асинхронную функцию для последовательного выполнения действий
        const fetchData = async () => {
            await dispatch(validateAndRefreshToken()); // Ждем завершения авторизации
            await dispatch(fetchProducts()); // Загружаем продукты только после авторизации
            await dispatch(fetchCart()); // получаем корзину
        };

        fetchData();
    }, [dispatch]);


    return isAuth ? (
        productsLoading || products === null || !products.length
        ?
        <>
            <LoaderButton color="#FE5F1E" size={180}/>
        </>
        :
        <>
            <TypesProduct />
            <Products products={products}/>
        </>
    ) : (
        <Navigate to="/login" replace />
    );
}

export default Home;

import Products from "../../components/Home/Products/Products";
import { useAppSelector } from "../../hooks/useAppSelector";
import { fetchProducts } from "../../store/reducers/products/asyncActions";
import { fetchCart } from "../../store/reducers/cart/asyncActions";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useEffect } from "react";
import TypesProduct from "../../components/Home/TypesProduct/TypesProduct";
import LoaderButton from "../../components/Helps/LoaderButton/LoaderButton";

function Home() {
    const dispatch = useAppDispatch();
    const productsLoading = useAppSelector((state) => state.products.loading);
    const products = useAppSelector((state) => state.products.productsData);

    useEffect(() => {
        dispatch(fetchProducts());
        dispatch(fetchCart());
    }, [dispatch]);

    if (productsLoading || products === null || !products.length) {
        return <LoaderButton color="#FE5F1E" size={180} />;
    }

    return (
        <>
            <TypesProduct />
            <Products products={products} />
        </>
    );
}

export default Home;

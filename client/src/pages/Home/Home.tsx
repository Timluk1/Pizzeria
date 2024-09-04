import Header from "../../components/Header/Header";
import Products from "../../components/Products/Products";
import TypesProduct from "../../components/TypesProduct/TypesProduct";
import { useAppSelector } from "../../hooks/hooks";
import { Navigate } from "react-router-dom";

function Home() {
    const isAuth = useAppSelector((state) => state.auth.isAuth);

    return isAuth ? (
        <>
            <Header />
            <TypesProduct />
            <Products />
        </>
    ) : (
        <Navigate to="/login" replace />
    );
}

export default Home;

import { Navigate } from "react-router-dom";
import EmptyCartComponent from "../../components/Cart/EmptyCartComponent/EmptyCartComponent";
import { useAppSelector } from "../../hooks/useAppSelector";

function EmptyCart() {
    const isAuth = useAppSelector((state) => state.auth.isAuth);

    return (
        isAuth
        ?
        <div className="empty-cart">
            <EmptyCartComponent />
        </div>
        :
        <Navigate to="/login"/>
    );
}

export default EmptyCart;

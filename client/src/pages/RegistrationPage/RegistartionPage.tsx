import Header from "../../components/Home/Header/Header";
import Registration from "../../components/Auth/Registration/Registration";
import { useAppSelector } from "../../hooks/useAppSelector";
import { Navigate } from "react-router-dom";

function RegistartionPage() {
    const isAuth = useAppSelector((state) => state.auth.isAuth);

    return isAuth 
    ? 
    <Navigate to="/home" replace />
    :
    (
        <>
            <Header />
            <Registration />
        </>
    );
}

export default RegistartionPage;

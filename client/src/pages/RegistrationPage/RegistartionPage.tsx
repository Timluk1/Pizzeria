import Header from "../../components/Header/Header";
import Registration from "../../components/Registration/Registration";
import { useAppSelector } from "../../hooks/hooks";
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

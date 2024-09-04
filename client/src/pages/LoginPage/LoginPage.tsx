import Header from "../../components/Header/Header";
import Login from "../../components/Login/Login";
import { useAppSelector } from "../../hooks/hooks";
import { Navigate } from "react-router-dom";

function LoginPage() {
    const isAuth = useAppSelector((state) => state.auth.isAuth);

    return isAuth ? (
        <Navigate to="/home" replace />
    ) : (
        <div>
            <Header />
            <Login />
        </div>
    );
}

export default LoginPage;

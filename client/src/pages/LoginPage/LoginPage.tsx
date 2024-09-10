import Header from "../../components/Home/Header/Header";
import Login from "../../components/Auth/Login/Login";
import { useAppSelector } from "../../hooks/useAppSelector";
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

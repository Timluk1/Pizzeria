import Login from "../../components/Auth/Login/Login";
import { useAppSelector } from "../../hooks/useAppSelector";
import { Navigate } from "react-router-dom";

function LoginPage() {
    const isAuth = useAppSelector((state) => state.auth.isAuth);

    return isAuth ? (
        <Navigate to="/home" replace />
    ) : (
        <Login />
    );
}

export default LoginPage;

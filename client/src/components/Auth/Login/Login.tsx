import { useState, ChangeEvent } from "react";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { Link } from "react-router-dom";
import { login } from "../../../store/reducers/auth/asyncActions";
import { useNavigate } from "react-router-dom";
import { useActions } from "../../../hooks/useActions";
import "./Login.scss";

function Login() {
    const dispatch = useAppDispatch();

    const errorAuth = useAppSelector((state) => state.auth.error);
    const isAuth = useAppSelector((state) => state.auth.isAuth);
    const { clearError } = useActions();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    if (!errorAuth && isAuth) {
        navigate("/home");
    }

    function handleChangePassword(event: ChangeEvent<HTMLInputElement>) {
        setPassword(event.target.value);
        clearError();
    }

    function handleChangeEmail(event: ChangeEvent<HTMLInputElement>) {
        setEmail(event.target.value);
        clearError();
    }

    async function onClick(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault();
        await dispatch(
            login({
                email: email,
                password: password,
            })
        );
    }

    return (
        <div className="login-container">
            <h2>Вход в аккаунт</h2>
            <form className="login-form">
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        onChange={handleChangeEmail}
                        value={email}
                        type="email"
                        id="email"
                        placeholder="Введите ваш email"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Пароль</label>
                    <input
                        onChange={handleChangePassword}
                        value={password}
                        type="password"
                        id="password"
                        placeholder="Введите ваш пароль"
                        required
                    />
                </div>
                <button
                    onClick={onClick}
                    type="submit"
                    className="submit-button"
                >
                    Войти
                </button>
            </form>
            <p className="error-text">{errorAuth}</p>
            <p className="redirect">
                Нет аккаунта? <Link to="/registration">Зарегистрируйтесь</Link>
            </p>
        </div>
    );
}

export default Login;

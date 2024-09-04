import { useState, ChangeEvent } from "react";
import { useAppDispatch } from "../../hooks/hooks";
import { Link } from "react-router-dom";
import { login } from "../../store/auth/asyncActions";
import { useNavigate } from "react-router-dom";
import "./Login.scss"

function Login() {
    const dispatch = useAppDispatch();
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleChangePassword = (event: ChangeEvent<HTMLInputElement>): void => setPassword(event.target.value);
    const handleChangeEmail = (event: ChangeEvent<HTMLInputElement>): void => setEmail(event.target.value);

    async function onClick(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault();
        try {
            await dispatch(
                login({
                    email: email,
                    password: password,
                })
            );
            navigate("/home");
        } catch (err) {
            console.error("Failed to register:", err);
        }
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
                <button onClick={onClick} type="submit" className="submit-button">
                    Войти
                </button>
            </form>
            <p className="redirect">
                Нет аккаунта? <Link to="/registration">Зарегистрируйтесь</Link>
            </p>
        </div>
    );
}

export default Login;

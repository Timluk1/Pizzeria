import { useState, ChangeEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks/hooks.ts";
import { registration } from "../../store/auth/asyncActions.ts";
import "./Registration.scss";

function Registration() {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleChangeUserName = (event: ChangeEvent<HTMLInputElement>): void => setUserName(event.target.value);
    const handleChangePassword = (event: ChangeEvent<HTMLInputElement>): void => setPassword(event.target.value);
    const handleChangeEmail = (event: ChangeEvent<HTMLInputElement>): void => setEmail(event.target.value);

    async function onClick(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault();
        try {
            await dispatch(
                registration({
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
        <div className="register-container">
            <h2>Регистрация</h2>
            <form className="register-form">
                <div className="form-group">
                    <label htmlFor="username">Имя пользователя</label>
                    <input
                        onChange={handleChangeUserName}
                        value={userName}
                        type="text"
                        id="username"
                        placeholder="Введите ваше имя"
                        required
                    />
                </div>
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
                    Зарегистрироваться
                </button>
            </form>
            <p className="redirect">
                Уже есть аккаунт? <Link to="/login">Войдите</Link>
            </p>
        </div>
    );
}

export default Registration;

import { useState, ChangeEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../hooks/useAppDispatch.ts";
import { useAppSelector } from "../../../hooks/useAppSelector.ts";
import { registration } from "../../../store/reducers/auth/asyncActions.ts";
import { useActions } from "../../../hooks/useActions.ts";
import "./Registration.scss";

function Registration() {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const errorAuth: string = useAppSelector((state) => state.auth.error);
    const isAuth = useAppSelector((state) => state.auth.isAuth)
    const { clearError } = useActions();

    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // если пользователь авторизован и нет ошибок регистрации делаем редирект
    if (!errorAuth && isAuth) {
        navigate("/home")
    }

    // обработчик изменения имени пользователя
    function handleChangeUserName(event: ChangeEvent<HTMLInputElement>) {
        setUserName(event.target.value);
        clearError();
    }

    // обработчик изменения пароля
    function handleChangePassword(event: ChangeEvent<HTMLInputElement>) {
        setPassword(event.target.value);
        clearError();
    }

    // обработчик изменения email
    function handleChangeEmail(event: ChangeEvent<HTMLInputElement>) {
        setEmail(event.target.value);
        clearError();
    }

    // обработчик отправки формы
    async function onClick(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault();
        // пробуем зарегистрироваться
        await dispatch(
            registration({
                email: email,
                password: password,
            })
        );
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
            <p className="error-text">{errorAuth}</p>
            <p className="redirect">
                Уже есть аккаунт? <Link to="/login">Войдите</Link>
            </p>
        </div>
    );
}

export default Registration;

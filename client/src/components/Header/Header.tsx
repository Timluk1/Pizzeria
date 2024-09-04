import PizzaIcon from "../../assets/icons/icon-pizza.svg";
import CartIndicator from "../CartIndicator/CartIndicator";
import { useAppSelector } from "../../hooks/hooks";
import "./Header.scss"

function Header() {
    const isAuth = useAppSelector((state) => state.auth.isAuth)

    return (
        <div>
            <header className="header">
                <div className="header__content">
                    <img className="header__icon" src={PizzaIcon} alt="" />
                    <div>
                        <h1 className="header__title">REACT PIZZA</h1>
                        <p className="header__text">самая вкусная пицца во вселенной</p>
                    </div>
                </div>
                {isAuth && <CartIndicator />}
            </header>

            <div className="line"></div>
        </div>
    );
}

export default Header;

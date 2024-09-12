import PizzaIcon from "../../../assets/icons/icon-pizza.svg";
import CartIndicator from "../CartIndicator/CartIndicator";
import { useAppSelector } from "../../../hooks/useAppSelector";
import MenuIcon from "../../../assets/icons/icon-menu.svg";
import { HeaderProps } from "./types";
import "./Header.scss";

function Header({setShowMenu}: HeaderProps) {
    const isAuth = useAppSelector((state) => state.auth.isAuth);
    const handleClickMenu = () => setShowMenu(true)

    return (
        <div>
            <header className="header">
                <div className="header__content">
                    <img className="header__icon" src={PizzaIcon} alt="" />
                    <div>
                        <h1 className="header__title">PIZZA</h1>
                        <p className="header__text">самая вкусная пицца</p>
                    </div>
                </div>
                {isAuth && (
                    <>
                        <CartIndicator />
                        <img src={MenuIcon} alt="" className="menu-burger" onClick={handleClickMenu}/>
                    </>
                )}
            </header>

            <div className="line"></div>
        </div>
    );
}

export default Header;

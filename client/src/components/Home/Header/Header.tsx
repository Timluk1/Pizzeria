import PizzaIcon from "../../../assets/icons/pizza-icon.svg";
import CartIndicator from "../CartIndicator/CartIndicator";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { HeaderProps } from "./types";
import MenuIcon from "../../Helps/MenuIcon/MenuIcon";
import ChangeMode from "../../Helps/ChangeMode/ChangeMode";
import "./Header.scss";

function Header({setShowMenu, showCartIndicator}: HeaderProps) {
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
                <div className="header__buttons">
                    <ChangeMode />
                    {isAuth && (
                    <>
                        {showCartIndicator ? <CartIndicator /> : null}
                        <MenuIcon onClick={handleClickMenu}/>
                    </>
                )   }
                </div>
            </header>

            <div className="line"></div>
        </div>
    );
}

export default Header;

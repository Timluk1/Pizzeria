import PizzaIcon from "../../assets/icons/icon-pizza.svg";
import CartIcon from "../../assets/icons/cart-icon.svg"
import "./Header.scss"

function Header() {
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

                <button className="header__cart-buton cart-buton">
                    <p className="cart-buton__price">520 ₽</p>
                    
                    <div className="cart-buton__line"></div>
                    <img className="cart-buton__img" src={CartIcon} alt="" />
                    <p className="cart-buton__count">3</p>
                </button>
            </header>

            <div className="line"></div>
        </div>
    );
}

export default Header;

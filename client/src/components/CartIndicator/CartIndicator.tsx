import CartIcon from "../../assets/icons/cart-icon.svg"
import "./CartIndicator.scss";

function CartIndicator() {
    return (
        <button className="cart-indicator">
            <p className="cart-indicator__price">520 ₽</p>

            <div className="cart-indicator__line"></div>
            <img className="cart-indicator__img" src={CartIcon} alt="" />
            <p className="cart-indicator__count">3</p>
        </button>
    );
}

export default CartIndicator;

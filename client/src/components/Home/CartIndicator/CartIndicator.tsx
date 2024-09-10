import { useNavigate } from "react-router-dom";
import CartIcon from "../../../assets/icons/cart-icon.svg";
import { useAppSelector } from "../../../hooks/useAppSelector";
import "./CartIndicator.scss";
import { useActions } from "../../../hooks/useActions";

function CartIndicator() {
    const navigate = useNavigate();
    const { clearCart } = useActions();

    const cartLength = useAppSelector((state) => state.cart.cartLength);
    const cartSum = useAppSelector((state) => state.cart.cartSum);

    function onClickCartIndicator() {
        clearCart();
        navigate("/cart");

    };
    
    return (
        <button className="cart-indicator" onClick={onClickCartIndicator}>
            <p className="cart-indicator__price">{cartSum} ₽</p>
            <div className="cart-indicator__line"></div>
            <img className="cart-indicator__img" src={CartIcon} alt="" />
            <p className="cart-indicator__count">{cartLength}</p>
        </button>
    );
}

export default CartIndicator;

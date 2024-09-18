import { useAppSelector } from "../../../hooks/useAppSelector";
import "./CartInformation.scss";

function CartInformation() {
    const cartSum = useAppSelector((state) => state.cart.cartSum);
    const cartLength = useAppSelector((state) => state.cart.cartLength);

    return (
        <div className="cart-information">
            <div className="cart-information__item">
                <p className="cart-information__item-label">Всего пицц:</p>
                <p className="cart-information__item-value">
                    <span>{cartLength} шт.</span>
                </p>
            </div>
            <div className="cart-information__total">
                <p className="cart-information__total-label">Общая сумма:</p>
                <p className="cart-information__total-value">
                    <span>{cartSum} ₽.</span>
                </p>
            </div>
        </div>
    );
}

export default CartInformation;

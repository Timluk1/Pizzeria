import ButtonPay from "../ButtonPay/ButtonPay";
import ButtonBack from "../ButtonBack/ButtonBack";
import "./CartFooter.scss"

function CartFooter() {
    return (
    <div className="cart-footer">
        <ButtonBack />
        <ButtonPay />
    </div>
    );
}

export default CartFooter;

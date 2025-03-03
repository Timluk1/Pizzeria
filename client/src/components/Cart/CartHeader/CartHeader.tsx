import CartIcon from "../../../assets/icons/cart.svg";
import TrashIcon from "../../../assets/icons/trash.svg";
import { deleteFullCart } from "../../../store/reducers/cart/asyncActions";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import "./CartHeader.scss";

function CartHeader() {
    const dispatch = useAppDispatch();
    async function deleteAllCart() {
        await dispatch(deleteFullCart())
    }
    return (
        <div className="cart-header" onClick={deleteAllCart}>
            <div className="cart-header__left">
                <img
                    src={CartIcon}
                    alt="Cart icon"
                    className="cart-header__cart-icon"
                />
                <h2 className="cart-header__title">Корзина</h2>
            </div>
            <div className="cart-header__right">
                <img
                    src={TrashIcon}
                    alt="Trash icon"
                    className="cart-header__trash-icon"
                />
                <p className="cart-header__clear-text">Очистить корзину</p>
            </div>
        </div>
    );
}

export default CartHeader;

import PatImgWhiteCross from "../../../assets/icons/icon-cross-white.svg";
import { ButtonAddProps } from "./types";
import { useAppSelector } from "../../../hooks/useAppSelector";
import LoaderButton from "../../Helps/LoaderButton/LoaderButton";
import "./ButtonAdd.scss";

function ButtonAdd({ props }: ButtonAddProps) {
    const { onClickAddToCart, productId } = props;
    const loadingAddToCart = useAppSelector(
        (state) => state.cart.addProductToCartDetailed.loading
    );
    const { productIdState, doughTypeState, sizeTypeState} = useAppSelector(
        (state) => state.cart.addProductToCartDetailed
    );

    return (
        <button
            className="product__add-button"
            onClick={onClickAddToCart}
            disabled={loadingAddToCart && productId === productIdState}
        >
            {loadingAddToCart && productId === productIdState ? (
                <LoaderButton color="#ffffff" size={20}/>
            ) : (
                <>
                    <img
                        src={PatImgWhiteCross}
                        alt="Add to cart"
                        className="product__add-button-img"
                    />
                    <p className="product__add-button-text">Добавить</p>
                </>
            )}
        </button>
    );
}

export default ButtonAdd;

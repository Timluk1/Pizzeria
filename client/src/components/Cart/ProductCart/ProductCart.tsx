import { Product } from "../../../store/reducers/cart/types";
import LoaderButton from "../../Helps/LoaderButton/LoaderButton";
import IconMinus from "../../../assets/icons/icon-minus.svg"
import IconPlus from "../../../assets/icons/icon-plus.svg";
import DeleteFromCart from "../../../assets/icons/delete-from-cart.svg"
import { addProductToCart } from "../../../store/reducers/cart/asyncActions";
import { deleteProductFromCart } from "../../../store/reducers/cart/asyncActions";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { useAppSelector } from "../../../hooks/useAppSelector";
import "./ProductCart.scss";

function ProductCart({ imgPath, price, quantity, name, doughType, sizeType, productId }: Product) {
    const disptach = useAppDispatch();
    const { loading, productIdState, doughTypeState, sizeTypeState} = useAppSelector((state) => state.cart.addProductToCartDetailed);
    
    async function handleIncrease() {
        await disptach(addProductToCart({productId, doughType, sizeType, quantity: 1}));
    };  

    async function handleDecrease() {
        await disptach(deleteProductFromCart({productId, doughType, sizeType, quantity: 1}));
    };

    async function handleRemove () {
        await disptach(deleteProductFromCart({productId, doughType, sizeType, quantity}));
    };

    return (
        <div className="product-cart">
            <div className="product-cart__details">
                <img src={imgPath} alt={`${name} image`} className="product-cart__image" />
                <div className="product-cart__info">
                    <h3 className="product-cart__title">{name}</h3>
                    <p className="product-cart__description">{doughType}, {sizeType} см.</p>
                </div>
            </div>
            {loading && productId === productIdState && doughType === doughTypeState && sizeType == sizeTypeState
            ?
            <LoaderButton color="#fe5f1e" size={35}/>
            :
            <>
                <div className="product-cart__quantity">
                    <button 
                        className="product-cart__button product-cart__button--minus" 
                        onClick={handleDecrease}
                    >
                        <img src={IconMinus} alt="Minus icon" />
                    </button>
                    <p className="product-cart__count">{quantity}</p>
                    <button 
                        className="product-cart__button product-cart__button--plus" 
                        onClick={handleIncrease}
                    >
                        <img src={IconPlus} alt="Plus icon" />
                    </button>
                </div>
                <p className="product-cart__price">{price * quantity} ₽</p>
                <button className="product-cart__remove" onClick={handleRemove}>
                    <img src={DeleteFromCart} alt="Remove icon" />
                </button>
            </>
            }
        </div>
    );
}

export default ProductCart;

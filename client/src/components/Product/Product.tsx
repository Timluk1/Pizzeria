import PatImgWhiteCross from "../../assets/icons/icon-cross-white.svg";
import PatImgOrangeCross from "../../assets/icons/icon-cross-orange.svg";
import { ProductType } from "../../types";
import "./Product.scss";


function Product({product}: ProductType) {
    // получаем типы теста у пиццы
    const {name, imgPath, basePrice} = product;

    const countInCart = 2;
    const renderedButtonAdd = countInCart ? (
        <button className="product__add-button-active">
            <img
                src={PatImgOrangeCross}
                alt=""
                className="product__add-button-active-img"
            />
            <p className="product__add-button-active-text">Добавить</p>
            <div className="product__add-button-active-quantity-box">
                <p className="product__add-button-active-quantity">2</p>
            </div>
        </button>
    ) : (
        <button className="product__add-button">
            <img
                src={PatImgWhiteCross}
                alt=""
                className="product__add-button-img"
            />
            <p className="product__add-button-text">Добавить</p>
        </button>
    );

    return (
        <div className="product">
            <img src={imgPath} alt="Чизбургер-пицца" className="product__image" />
            <h3 className="product__name">{name}</h3>
            <div className="product__options">
                <div className="product__types">
                    <button className="product__button product__button-active">
                        Тонкое
                    </button>
                    <button className="product__button">Традиционное</button>
                </div>
                <div className="product__sizes">
                    <button className="product__button product__button-active">
                        26 см.
                    </button>
                    <button className="product__button">30 см.</button>
                    <button className="product__button">40 см.</button>
                </div>
            </div>
            <div className="product__footer">
                <p className="product__price">{basePrice} ₽</p>
                {renderedButtonAdd}
            </div>
        </div>
    );
}

export default Product;

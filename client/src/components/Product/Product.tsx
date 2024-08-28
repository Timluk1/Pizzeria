import Image from "../../assets/pizza-images/first.png";
import { useState } from "react";
import "./Product.scss";

interface Props {
    name: string
}

function Product({name}: Props) {
    return (
        <div className="product">
            <img src={Image} alt="Чизбургер-пицца" className="product__image" />
            <h3 className="product__name">{name}</h3>
            <div className="product__options">
                <div className="product__types">
                    <button className="product__button product__button-active">Тонкое</button>
                    <button className="product__button">Традиционное</button>
                </div>
                <div className="product__sizes">
                    <button className="product__button product__button-active">26 см.</button>
                    <button className="product__button">30 см.</button>
                    <button className="product__button">
                        40 см.
                    </button>
                </div>
            </div>
            <div className="product__footer">
                <p className="product__price">395 ₽</p>
                <button className="product__add-button">Добавить</button>
            </div>
        </div>
    );
}

export default Product;

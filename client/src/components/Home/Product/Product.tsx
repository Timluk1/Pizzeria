// типы
import { ProductType } from "../../../store/reducers/products/types";
// хукт
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { useState } from "react";

import { addProductToCart } from "../../../store/reducers/cart/asyncActions";
// компоненты
import ButtonAdd from "../ButtonAdd/ButtonAdd";
import DoughTypesButtons from "../DoughTypesButtons/DoughTypesButtons";
import SizeTypesButtons from "../SizeTypesButtons/SizeTypesButtons";

import { validateAndRefreshToken } from "../../../store/reducers/auth/asyncActions";
// стили
import "./Product.scss";

function Product({ quantityInCart, imgPath, name, basePrice, doughTypes, sizeTypes, productId, doughType, sizeType}: ProductType) {

    // вызываем хуки
    const dispatch = useAppDispatch();

    // Определяем активный тип теста и размер (если они заданы)
    const [activeDoughType, setActiveDoughType] = useState(doughType ? doughType : doughTypes[0]);
    const [activeSizeType, setActiveSizeType] = useState(sizeType ? sizeType : sizeTypes[0]);
    const price = Math.round(
        basePrice * activeDoughType.factor * activeSizeType.factor
    );


    // Обработчик для добавления продукта в корзину
    async function onClickAddToCart() {
        const productData = {
            productId,
            doughType: activeDoughType.type,
            sizeType: activeSizeType.size,
            quantity: 1,
        };
        // послыаем запрос на обновление количества товара в козине
        await dispatch(validateAndRefreshToken()); // Ждем завершения авторизации
        await dispatch(addProductToCart(productData));
    }

    // Обработчик для изменения типа теста
    function onClickChangeDoughType(
        event: React.MouseEvent<HTMLButtonElement>
    ) {
        const index: number = Number(event.currentTarget.dataset.index);
        const newDoughType = doughTypes[index];
        setActiveDoughType(newDoughType)
    }

    // Обработчик для изменения размера продукта
    function onClickChangeSizeType(event: React.MouseEvent<HTMLButtonElement>) {
        const index: number = Number(event.currentTarget.dataset.index);
        const newSizeType = sizeTypes[index];
        setActiveSizeType(newSizeType);
    }

    // Определяем класс кнопки в зависимости от количества в корзине
    const renderedButtonAdd = <ButtonAdd props={{quantityInCart, productId, onClickAddToCart}} />

    // Отображение кнопок для типов теста
    const renderedDoughTypes = <DoughTypesButtons props={{doughTypes, onClickChangeDoughType, activeDoughType}}/>

    // Отображение кнопок для размеров продукта
    const renderedSizeTypes = <SizeTypesButtons props={{sizeTypes, activeSizeType, onClickChangeSizeType}}/>

    return (
        <div className="product">
            <div>
                <img src={imgPath} alt={name} className="product__image" loading="lazy"/>
                <h3 className="product__name">{name}</h3>
            </div>
            <div>
                <div className="product__options">
                    <div className="product__types">{renderedDoughTypes}</div>
                    <div className="product__sizes">{renderedSizeTypes}</div>
                </div>
                <div className="product__footer">
                    <p className="product__price">{price} ₽</p>
                    {renderedButtonAdd}
                </div>
            </div>
        </div>
    );
}

export default Product;

import ButtonBack from "../ButtonBack/ButtonBack";
import "./EmptyCartComponent.scss";

function EmptyCartComponent() {
    return (
        <div className="empty-cart-component">
            <img
                className="empty-cart-component__img"
                src=""
                alt=""
            />
            <h3 className="empty-cart-component__title">Корзина пустая(</h3>
            <p className="empty-cart-component__text">Вернитесь на главную страницу, чтобы добавить товар</p>
            <ButtonBack />
        </div>
    );
}

export default EmptyCartComponent;

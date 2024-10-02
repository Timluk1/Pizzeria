import { MenuProps } from "./types";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { useNavigate, useLocation } from "react-router-dom";
import "./Menu.scss";
import CloseMenuIcon from "../CloseMenuIcon/CloseMenuIcon";

function Menu({ showMenu, setShowMenu }: MenuProps) {
    const cartSum = useAppSelector((state) => state.cart.cartSum);
    const cartLength = useAppSelector((state) => state.cart.cartLength);
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const className = `menu${showMenu ? " active" : ""}`;
    let textMenu = "";

    switch (pathname) {
        case "/home":
            textMenu = "Перейти в корзину";
            break;
        case "/cart":
            textMenu = "Перейти на главное меню";
            break;
        case "/empty-cart":
            textMenu = "Перейти на главное меню";
            break;
    }

    function handleClickClose(){
        setShowMenu(false);
    }

    function handleClickMenu() {
        setShowMenu(false);
        switch (pathname) {
            case "/home":
                navigate("/cart");
                break;
            case "/empty-cart":
                navigate("/home");
                break;
            case "/cart":
                navigate("/home");
                 break;
        }
    }

    return (
        <div className={className}>
            <div className="menu-header">
                <CloseMenuIcon onClick={handleClickClose}/>
            </div>
            <div className="menu-content">
                <div className="menu-item-container">
                    <p className="menu-item">Общая сумма корзины:</p>
                    <p className="menu-item-value">{cartSum} ₽</p>
                </div>
                <div className="menu-item-container">
                    <p className="menu-item">Количество товаров:</p>
                    <p className="menu-item-value">{cartLength}</p>
                </div>
                <button className="menu-button" onClick={handleClickMenu}>{textMenu} </button>
            </div>
        </div>
    );
}

export default Menu;

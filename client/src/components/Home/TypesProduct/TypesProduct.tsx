import TypeProductButton from "../TypeProductButton/TypesProductButton";
import { useState } from "react";

function TypesProduct() {
    const [activeButton, setActiveButton] = useState("Пиццы")

    const buttons: Array<string> = ["Пиццы", "Коктейли", "Напитки"];

    function handleClickButtonType(text: string) {
        setActiveButton(text);
    }

    const renderedButtons = buttons.map((text, index) => (
        <TypeProductButton key={index} text={text} isActive={text === activeButton} handleClick={handleClickButtonType}/>
    ));

    return (
        <div className="TypesProduct">
            {renderedButtons}
        </div>
    );
}

export default TypesProduct;

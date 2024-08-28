import TypeProductButton from "../TypeProductButton/TypesProductButton";
import { useState } from "react";

function TypesProduct() {
    const [activeButton, setActiveButton] = useState<string>("Все")

    const buttons: Array<string> = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

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

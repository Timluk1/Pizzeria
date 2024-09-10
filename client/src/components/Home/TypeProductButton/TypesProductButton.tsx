import "./TypeProductButton.scss";
import { PropsButtonType } from "./types";

function TypeProductButton({ text, isActive, handleClick }: PropsButtonType) {
    const className: string = `type-product type-product${isActive ? "-active": ""}`;
    return <button className={className} onClick={() => handleClick(text)}>{text}</button>;
}

export default TypeProductButton;

import { useAppSelector } from "../../../hooks/useAppSelector";
import { MenuIconProps } from "./types";
import "./MenuIcon.scss"

function MenuIcon({onClick}: MenuIconProps) {
    const theme = useAppSelector((state) => state.settings.theme);

    const fillColor = theme === "dark" ? "#ffffff" : "#000000";

    return (
        <button className="menu-icon" onClick={onClick}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
                width="50px"
                height="50px"
            >
                <path
                    d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z"
                    fill={fillColor}
                />
                <path
                    d="M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z"
                    fill={fillColor}
                />
                <path
                    d="M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"
                    fill={fillColor}
                />
            </svg>
        </button>
    );
}

export default MenuIcon;

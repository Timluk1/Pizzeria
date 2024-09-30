import { useTheme } from "../../../hooks/useTheme";

import "./ChangeMode.scss";

function ChangeMode() {
    const {theme, onChangeTheme} = useTheme();
    const className = `change-mode__circle${theme === "light" ? "-active change-mode__circle": ""}`;
    return (
        <button className="change-mode" onClick={onChangeTheme}>
            <div className={className}></div>
            <div className="change-mode__modes">
                <div>🌙</div>
                <div>☀️</div>
            </div>
        </button>
    );
}

export default ChangeMode;

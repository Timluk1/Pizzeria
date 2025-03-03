import { useNavigate } from "react-router-dom";
import ArrowIcon from "../../../assets/icons/arrow-icon.svg"
import { useActions } from "../../../hooks/useActions";
import "./ButtonBack.scss";

function ButtonBack() {
    const navigate = useNavigate();
    const {clearProductsData} = useActions();

    const onClick = () => {
        clearProductsData();
        navigate("/home");
    }

    return (
        <button className="button-back" onClick={onClick}>
            <img src={ArrowIcon} alt="" className="button-back__img"/>
            <p className="button-back__text">Вернуться назад</p>
        </button> 
    );
}

export default ButtonBack;

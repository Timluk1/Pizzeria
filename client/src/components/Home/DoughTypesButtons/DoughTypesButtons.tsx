import { DoughTypesButtonsProps } from "./types";

function DoughTypesButtons({ props }: DoughTypesButtonsProps) {
    const { doughTypes, onClickChangeDoughType, activeDoughType } = props;

    return doughTypes.map(({ type }, index) => (
        <button
            key={index}
            data-index={index}
            className={`product__button${
                type === activeDoughType.type ? " product__button-active" : ""
            }`}
            onClick={onClickChangeDoughType}
        >
            {type}
        </button>
    ));
}

export default DoughTypesButtons;

import { SizeTypesButtonsProps } from "./types";

function SizeTypesButtons({ props }: SizeTypesButtonsProps) {
    const { sizeTypes, activeSizeType, onClickChangeSizeType } = props;

    return sizeTypes.map(({ size }, index) => (
        <button
            key={index}
            data-index={index}
            className={`product__button${
                size === activeSizeType.size ? " product__button-active" : ""
            }`}
            onClick={onClickChangeSizeType}
        >
            {size} см.
        </button>
    ));
}

export default SizeTypesButtons;

interface SizeType {
    size: number;
    factor: number,
}

export interface SizeTypesButtonsProps {
    props: {
        sizeTypes: SizeType[];
        activeSizeType: SizeType;
        onClickChangeSizeType: (event: React.MouseEvent<HTMLButtonElement>) => void;
    }
}
export interface DoughType {
    type: string;
    factor: number;
}

export interface DoughTypesButtonsProps {
    props: {
        onClickChangeDoughType: (event: React.MouseEvent<HTMLButtonElement>) => void;
        doughTypes: DoughType[];
        activeDoughType: DoughType;
    }
}
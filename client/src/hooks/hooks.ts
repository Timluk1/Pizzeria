import {useDispatch, useSelector, TypedUseSelectorHook} from 'react-redux';
import { useState } from 'react';
import { AppDispatch, RootState } from "../store/store";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export function usePagination<T>(data: T[]) {
    const numberProductOnOnePage = 4;
    const numberOfProducs = data.length;

    const numberOfPages = Math.round(numberOfProducs / numberProductOnOnePage);
    const [activePage, setActivePage] = useState(1);

    const start = numberProductOnOnePage * (activePage - 1);
    const end = numberProductOnOnePage * (activePage);

    const currentData =  data.slice(start, end);

    return {activePage, setActivePage, numberOfPages, currentData}
}
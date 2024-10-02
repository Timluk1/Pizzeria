import { useCallback, useState } from 'react';

export function usePagination<T>(data: T[]) {
    const numberProductOnOnePage = 4;
    const numberOfProducs = data.length;

    const numberOfPages = Math.round(numberOfProducs / numberProductOnOnePage);
    const [activePage, setActivePage] = useState(1);

    const start = numberProductOnOnePage * (activePage - 1);
    const end = numberProductOnOnePage * (activePage);

    const currentData =  data.slice(start, end);

    const handleSetActivePage = useCallback((num: number) => setActivePage(num), []);

    return {activePage, handleSetActivePage, numberOfPages, currentData}
}
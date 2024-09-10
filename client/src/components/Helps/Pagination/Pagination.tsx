import { PaginationProps } from "./types";
import "./Pagination.scss"

function Pagination( {  activePage, setActivePage, numberOfPages }: PaginationProps) {

    // массив, состоящий из чисел от 1 до количество 
    const currentPages = [...Array(numberOfPages).keys()].map(i => i + 1);

    const onClickPrevButton = () => setActivePage(activePage > 1 ? activePage - 1 : 1)
    const onClickNextButton = () => setActivePage(activePage < numberOfPages ? activePage + 1 : numberOfPages)

    // страницы
    const renderedPages = currentPages.map((page) => (
        <li
            key={page}
            className={`pagination__item ${
                activePage === page
                    ? "pagination__item--active"
                    : ""
            }`}
            onClick={() => setActivePage(page)}
        >
            {page}
        </li>
    ))

    return (
        <div className="pagination">
            <button
                className="pagination__button"
                onClick={onClickPrevButton}
            >
                &lt;
            </button>

            <ul className="pagination__list">
                {renderedPages}
            </ul>

            <button
                className="pagination__button"
                onClick={onClickNextButton}
            >
                &gt;
            </button>
        </div>
    );
}

export default Pagination;

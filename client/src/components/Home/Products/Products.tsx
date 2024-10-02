import { usePagination } from "../../../hooks/usePagination.ts";
import Product from "../Product/Product.tsx";
import Pagination from "../../Helps/Pagination/Pagination.tsx";
import { ProductsProps } from "./types.ts";
import { useEffect } from "react";
import "./Products.scss";

function Products({ products }: ProductsProps) {
    const { activePage, handleSetActivePage, numberOfPages, currentData } = usePagination(products);

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "instant",
        });
    }, [activePage]);

    return (
        <div className="products">
            <h2 className="products__title">Все пиццы</h2>
            <div className="products-items">
                {currentData.map((element) => (
                    <Product {...element} key={element.productId} />
                ))}
            </div>
            {products.length ? (
                <Pagination
                    // Передаем активную страницу (по умолчанию 1)
                    activePage={activePage}
                    // Функция изменения активной страницы
                    setActivePage={handleSetActivePage}
                    // Количество страниц
                    numberOfPages={numberOfPages}
                />
            ) : null}
        </div>
    );
}

export default Products;

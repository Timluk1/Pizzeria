import { usePagination } from "../../../hooks/usePagination.ts";
import Product from "../Product/Product.tsx";
import Pagination from "../../Helps/Pagination/Pagination.tsx";
import { ProductsProps} from "./types.ts"
import { useEffect } from "react";
import "./Products.scss";

function Products({products}: ProductsProps) {
    const { activePage, setActivePage, numberOfPages, currentData } = usePagination(products);

    // продукты
    const renderedProducts = currentData.map((element) => (
        <Product {...element} key={element.productId} />
    ));

    useEffect(() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }, [activePage]);

    return (
        <div className="products">
            <h2 className="products__title">Все пиццы</h2>
            <div className="products-items">{renderedProducts}</div>
            {
                products.length
                ?
                <Pagination
                    // Передаем активную страницу (по умолчанию 1)
                    activePage={activePage}
                    // Функция изменения активной страницы
                    setActivePage={setActivePage}
                    // Количество страниц
                    numberOfPages={numberOfPages}
                />
                :
                null
            }
        </div>
    );
}

export default Products;

import { useEffect } from "react";
import { useAppDispatch, useAppSelector, usePagination } from "../../hooks/hooks.ts";
import { fetchProducts } from "../../store/products/asyncActions.ts";
import { validateAndRefreshToken } from "../../store/auth/asyncActions.ts";
import Product from "../Product/Product.tsx";
import Pagination from "../Pagination/Pagination.tsx";
import "./Products.scss";

function Products() {
    const dispatch = useAppDispatch();
    const loadingProducts = useAppSelector((state) => state.products.loading);
    const loadingAuth = useAppSelector((state) => state.auth.loading); // Добавляем отдельное состояние для загрузки авторизации
    const products = useAppSelector((state) => state.products.products);

    // вызываем хук для работы с пагинацией
    const {activePage, setActivePage, numberOfPages, currentData} = usePagination(products);

    useEffect(() => {
        // Создаем асинхронную функцию для последовательного выполнения действий
        const fetchData = async () => {
            await dispatch(validateAndRefreshToken()); // Ждем завершения авторизации
            await dispatch(fetchProducts()); // Загружаем продукты только после авторизации
        };

        fetchData();
    }, [dispatch]);

    if (loadingProducts || loadingAuth) {
        // Отображаем индикатор загрузки, если любое из состояний загрузки равно true
        return <div>Загрузка...</div>;
    }


    const renderedProducts = currentData.map((element, index) => (
        <Product key={index} product={element} />
    ));

    
    return (
        <div className="products">
            <h2 className="products__title">Все пиццы</h2>
            <div className="products-items">
                {renderedProducts}
            </div>

            <Pagination
                // Передаем активную страницу (по умолчанию 1)
                activePage={activePage}
                // Функция изменения активной страницы
                setActivePage={setActivePage}
                // Количество страниц
                numberOfPages={numberOfPages}
            />
        </div>
    );
}

export default Products;

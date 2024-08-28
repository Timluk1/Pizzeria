import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks.ts";
import { fetchAllProducts } from "../../store/products/asyncActions.ts";
import Product from "../Product/Product.tsx";
import "./Products.scss";

function Products() {
    const dispatch = useAppDispatch();
    const loading = useAppSelector((state) => state.products.loading);
    const products = useAppSelector((state) => state.products.products)

    useEffect(() => {
        dispatch(fetchAllProducts());
    }, [dispatch]);

    const renderedProducts = products.map((element, index) => {
        if (loading || loading === null) {
            return "Загрузка..."
        } else {
            return <Product key={index} name={element.name}/>
        }
    })

    return (
        <div className="products">
            <h2 className="products__title">Все пиццы</h2>
            <div className="products-items">
                {renderedProducts}
            </div>
        </div>
    );
}

export default Products;

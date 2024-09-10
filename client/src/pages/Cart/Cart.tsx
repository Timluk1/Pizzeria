import Header from "../../components/Home/Header/Header";
import CartHeader from "../../components/Cart/CartHeader/CartHeader";
import ProductsCart from "../../components/Cart/ProductsCart/ProductsCart";
import CartFooter from "../../components/Cart/CartFooter/CartFooter";

function Cart() {
    return (
        <div className="cart">
            <Header />
            <CartHeader />
            <ProductsCart />
            <CartFooter />
        </div>
    );
}

export default Cart;

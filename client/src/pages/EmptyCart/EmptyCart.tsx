import Header from "../../components/Home/Header/Header";
import EmptyCartComponent from "../../components/Cart/EmptyCartComponent/EmptyCartComponent";

function EmptyCart() {
    return (
        <div className="empty-cart">
            <Header />
            <EmptyCartComponent />
        </div>
    );
}

export default EmptyCart;

import { productsActions } from "../reducers/products/productsSlice";
import { authActions } from "../reducers/auth/authSclice";
import { cartActions } from "../reducers/cart/cartSlice";

export const AllActionCreators = {
    ...productsActions,
    ...authActions,
    ...cartActions,
}
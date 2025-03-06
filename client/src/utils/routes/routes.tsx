import Home from "../../pages/Home/Home";
import Cart from "../../pages/Cart/Cart";
import EmptyCart from "../../pages/EmptyCart/EmptyCart";
import Registration from "../../components/Auth/Registration/Registration";
import Login from "../../components/Auth/Login/Login";
import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface IRoute {
    path: string;
    component: ReactNode
}

const privateRoutes: IRoute[] = [
    {
        path: "home",
        component: <Home />
    },
    {
        path: "cart",
        component: <Cart />
    },
    {
        path: "empty-cart",
        component: <EmptyCart />
    },
    {
        path: "*",
        component: <Navigate to="home" />
    }
];

const publicRoutes = [
    {
        path: "login",
        component: <Login />
    },
    {
        path: "registration",
        component: <Registration />
    },
    {
        path: "*",
        component: <Navigate to="login" />
    }
];

export { privateRoutes, publicRoutes };
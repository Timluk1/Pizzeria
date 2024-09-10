import Home from "./pages/Home/Home";
import LoginPage from "./pages/LoginPage/LoginPage.tsx";
import RegistartionPage from "./pages/RegistrationPage/RegistartionPage.tsx";
import CartPage from "./pages/Cart/Cart.tsx";
import Container from "./components/Container/Container.tsx";
import EmptyCart from "./pages/EmptyCart/EmptyCart.tsx";
import { Route, Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";

function App() {
    return (
        <div className="app">
            <Container>
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route
                        path="/registration"
                        element={<RegistartionPage />}
                    />
                    <Route path="cart" element={<CartPage />} />
                    <Route path="empty-cart" element={<EmptyCart />} />
                    <Route
                        path="/*"
                        element={<Navigate to="/home" replace />}
                    />
                </Routes>
            </Container>
        </div>
    );
}

export default App;

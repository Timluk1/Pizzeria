import Home from "./pages/Home/Home";
import LoginPage from "./pages/LoginPage/LoginPage.tsx";
import RegistartionPage from "./pages/RegistrationPage/RegistartionPage.tsx";
import CartPage from "./pages/Cart/Cart.tsx";
import Container from "./components/Container/Container.tsx";
import EmptyCart from "./pages/EmptyCart/EmptyCart.tsx";
import Menu from "./components/Helps/Menu/Menu.tsx";
import Header from "./components/Home/Header/Header.tsx";
import { Route, Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useState } from "react";

function App() {
    const [showMenu, setShowMenu] = useState<boolean>(false);

    return (
        <div className="app">
            <Container>
                <Header
                    setShowMenu={setShowMenu}
                />

                <Menu 
                    showMenu={showMenu}
                    setShowMenu={setShowMenu}
                />
                
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

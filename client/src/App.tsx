import Container from "./components/Helps/Container/Container.tsx";
import Menu from "./components/Helps/Menu/Menu.tsx";
import Header from "./components/Home/Header/Header.tsx";
import { useLocation } from "react-router-dom";
import { useState } from "react";

import AllRoutes from "./providers/AllRoutes.tsx";

function App() {
    const [showMenu, setShowMenu] = useState<boolean>(false);
    const location = useLocation();
    let showCartIndicator = false;
    
    if (location.pathname === "/home") {
        showCartIndicator = true;
    }

    return (
        <div className="app">
            <Container>
                <Header
                    setShowMenu={setShowMenu}
                    showCartIndicator={showCartIndicator}
                />

                <Menu 
                    showMenu={showMenu}
                    setShowMenu={setShowMenu}
                />
                
                <AllRoutes />
            </Container>
        </div>
    );
}

export default App;

import Home from "./pages/Home/Home"
import LoginPage from "./pages/LoginPage/LoginPage.tsx"
import RegistartionPage from "./pages/RegistrationPage/RegistartionPage.tsx"
import Container from "./components/Container/Container.tsx"
import { Route, Routes } from "react-router-dom"
import { Navigate } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Container>
        <Routes >
          <Route path="/home" element={<Home />}/>
          <Route path="/login" element={<LoginPage />}/>
          <Route path="/registration" element={<RegistartionPage />}/>
          <Route path="/*" element={<Navigate to="/home" replace />}/>
        </Routes>
      </Container>
    </div>
  )
}

export default App

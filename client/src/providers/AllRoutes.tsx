import { Routes, Route } from "react-router-dom";
import { useAppSelector } from "../hooks/useAppSelector";
import { privateRoutes, publicRoutes } from "../utils/routes/routes";

function AllRoutes() {
    const isAuth = useAppSelector((state) => state.auth.isAuth);

    return (
        <Routes>
            {isAuth
                ? privateRoutes.map(({ path, component }) => (
                    <Route key={path} path={path} element={component} />
                ))
                : publicRoutes.map(({ path, component }) => (
                    <Route key={path} path={path} element={component} />
                ))
            }
        </Routes>
    );
}

export default AllRoutes;

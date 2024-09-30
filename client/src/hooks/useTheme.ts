import { useAppDispatch } from "./useAppDispatch";
import { useEffect } from "react";
import { toggleTheme } from "../store/reducers/settings/settingsSlice";
import { useAppSelector } from "./useAppSelector";

export const useTheme = () => {
    const dispatch = useAppDispatch();
    const theme = useAppSelector((state) => state.settings.theme);

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    const onChangeTheme = () => {
        dispatch(toggleTheme());
    }


    return {theme, onChangeTheme};
}
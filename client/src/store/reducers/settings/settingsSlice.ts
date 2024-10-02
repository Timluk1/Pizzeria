import { createSlice } from "@reduxjs/toolkit";
import { Theme, SettingsState } from "./types";

const storedTheme = localStorage.getItem("theme") as Theme | null;
const THEME: Theme = storedTheme === "dark" || storedTheme === "light" ? storedTheme : "light";

const initialState: SettingsState = {
    theme: THEME,
};

export const settingsSlice = createSlice({
    name: "settings",
    initialState,
    reducers: {
        toggleTheme: (state) => {
            if (state.theme === "dark") {
                state.theme = "light";
            } else {
                state.theme = "dark";
            }
            localStorage.setItem("theme", state.theme);
        },
    },
});

export const { toggleTheme } = settingsSlice.actions;
export const settingsActions = settingsSlice.actions;
export const settingsReducer = settingsSlice.reducer;

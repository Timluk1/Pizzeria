// Тип для темы
export type Theme = "dark" | "light";

// Интерфейс состояния настроек
export interface SettingsState {
    theme: Theme;
}
"use client";
import { createContext, useContext, useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import { ReactNode } from "react";

type ThemeType = typeof lightTheme | typeof darkTheme;

type ThemeContextType = {
    theme: ThemeType;
    toggleTheme: (mode: "dark" | "light") => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const StyledThemeProvider = ({ children }: { children: ReactNode }) => {
    const [isDark, setIsDark] = useState(false);

    const toggleTheme = (mode: "dark" | "light") => {
        setIsDark(mode === "dark");
    };

    const theme = isDark ? darkTheme : lightTheme;
    if (isDark === undefined) return null;
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </ThemeContext.Provider>
    );
};

export const useThemeContext = () => {
    const context = useContext(ThemeContext);
    if (!context) throw new Error("useThemeContext must be used inside ThemeProvider");
    return context;
};

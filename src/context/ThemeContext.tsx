import React, {createContext, useState, useEffect} from "react";
import {ThemeColors} from "../Theme/ThemeColors.ts";

// Define the type of the context
export type TypeThemeContext = {
  theme: 'light' | 'dark';
  colors: typeof ThemeColors['light']; // Los colores cambian segun el tema
  toggleTheme: () => void;
};

// Create the context
export const ThemeContext = createContext<TypeThemeContext>({
  theme: "light",
  colors: ThemeColors.light,
  toggleTheme: () => {
  },
});

type TypeThemeProvider = {
  children: React.ReactNode;
}

// Create the provider
export const ThemeProvider: React.FC<TypeThemeProvider> = ({children}): JSX.Element => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [colors, setColors] = useState(ThemeColors.light);
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme as 'light' | 'dark');
      setColors(ThemeColors[savedTheme as 'light' | 'dark']);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    setColors(ThemeColors[newTheme]);
    window.localStorage.setItem("theme", newTheme);
  }

  return (
    <ThemeContext.Provider value={{theme, colors, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};


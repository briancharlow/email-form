import React, { useState, useContext, createContext } from 'react';

// Create the ThemeContext
const ThemeContext = createContext();

// Create a custom hook to consume the ThemeContext
export const useTheme = () => useContext(ThemeContext);

// Provide the theme values to the child components
export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

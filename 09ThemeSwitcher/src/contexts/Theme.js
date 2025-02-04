import {createContext,useContext} from 'react';

export const ThemeContext = createContext({
    // can place variable and methods also;
    themeMode:'light',
    darkTheme: () => {},
    lightTheme: () => {},
})

export const ThemeProvider = ThemeContext.Provider

// A custom Hooks we can export
export default function useTheme() {
    return useContext(ThemeContext)
}
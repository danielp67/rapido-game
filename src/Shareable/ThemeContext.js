import React from 'react';

export const Theme = {
    dark: {
        className:"bg-dark text-white"
    },

    light: {
        className:""
    }
}

export const ThemeContext = React.createContext({
    theme: Theme.light,
    toggleTheme: () => {
    },
});


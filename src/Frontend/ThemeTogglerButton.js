import React from 'react';
import {Theme, ThemeContext} from './ThemeContext';


function ThemeTogglerButton() {
    // Le Theme Toggler Button reçoit non seulement le thème
    // mais aussi une fonction toggleTheme du contexte
    return (
        <ThemeContext.Consumer>
            {({theme, toggleTheme}) => (
                <button
                    className={theme.className}
                    onClick={toggleTheme}>
                    Changer le thème {theme.className}
                </button>

            )}
        </ThemeContext.Consumer>
    );
}

export default ThemeTogglerButton;
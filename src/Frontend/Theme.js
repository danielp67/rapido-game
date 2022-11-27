import React from 'react';

const Theme = {
    light: {
        foreground: '#000000',
        background: '#eeeeee',
    },
    dark: {
        foreground: '#ffffff',
        background: '#222222',
    },
};

export const ThemeContext = React.createContext(
    Theme.dark // valeur par défaut
);

export default ThemeContext;



const ThemedButton = () => {

        let props = this.props;
        let theme = this.context;
        return (
            <button
                {...props}
                style={{backgroundColor: theme.background}}
            />
        );

}
ThemedButton.contextType = ThemeContext;

export default ThemedButton;
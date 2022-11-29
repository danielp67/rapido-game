import './App.css';
import MainBoard from "./Frontend/MainBoard";
import {ThemeContext, Theme} from "./Frontend/ThemeContext";
import React, {useReducer, useState} from "react";
import ThemeTogglerButton from "./Frontend/ThemeTogglerButton";


const initialState = {theme: Theme.light};

function toggleTheme(state) {

return {theme: state.theme === Theme.dark ? Theme.light : Theme.dark}
};


function App() {

    const [state, dispatch] = useReducer(toggleTheme, initialState)

    return (

<ThemeContext.Provider value={state} >
        <div className={`container-fluid vh-100 ${state.theme.className}`}>
                 <button onClick={() => dispatch()}>-</button>
            <ThemeTogglerButton />

                <MainBoard/>
        </div>
</ThemeContext.Provider>
    );
}

export default App;

import React, {useState} from 'react';
import SwitchButton from "./SwitchButton";
import RadioButton from "./RadioButton";
import {ThemeContext} from "./ThemeContext";
import Modal from "./Modal";


const SettingsTab = (props) => {

    const {settings, setSettings} = props
    const [state, setState] = useState(settings)

    const submitForm = () => {
        setSettings(state)
    }

    if(settings) {
        return (

            <>
                <ThemeContext.Consumer>
                    {({theme, toggleTheme}) => {
                        const handleChange = (event) => {
                            const {name, value, checked} = event.target
                            setState((prevState) => ({
                                ...prevState,
                                [name]: value !== "on" ? value : checked,
                            }));

                            if(name==="switchDarkMode")
                            {
                                toggleTheme()
                            }
                        }

                        return  (
                                <div className={"text-start"}>
                                    Nombre de joueurs :
                                    <RadioButton
                                        state={state}
                                        name={"nbPlayer"}
                                        value={"4"}
                                        onChange={handleChange}
                                        label={"4"}
                                    />
                                    <RadioButton
                                        state={state}
                                        name={"nbPlayer"}
                                        value={"8"}
                                        onChange={handleChange}
                                        label={"8"}
                                    />
                                    <RadioButton
                                        state={state}
                                        name={"nbPlayer"}
                                        value={"12"}
                                        onChange={handleChange}
                                        label={"12"}
                                    />

                                    <hr/>
                                    Level :
                                    <RadioButton
                                        state={state}
                                        name={"level"}
                                        value={"3500"}
                                        onChange={handleChange}
                                        label={"Easy"}
                                    />
                                    <RadioButton
                                        state={state}
                                        name={"level"}
                                        value={"2000"}
                                        onChange={handleChange}
                                        label={"Medium"}
                                    />
                                    <RadioButton
                                        state={state}
                                        name={"level"}
                                        value={"1000"}
                                        onChange={handleChange}
                                        label={"Hard"}
                                    />
                                    <hr/>

                                    <SwitchButton
                                        state={state}
                                        name={"switchCountScore"}
                                        onChange={handleChange}
                                        label={"Comptage des points"}
                                    />
                                    <SwitchButton
                                        state={state}
                                        name={"switchTimer"}
                                        onChange={handleChange}
                                        label={"Timer"}
                                    />
                                    <SwitchButton
                                        state={state}
                                        name={"switchDarkMode"}
                                        onChange={handleChange}
                                        label={"Dark Mode"}
                                    />

                                </div>
                        )}}
                </ThemeContext.Consumer>

            </>
        )
    }
    else{
        return null
    }
}

export default SettingsTab;
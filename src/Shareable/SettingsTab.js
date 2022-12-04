import React from 'react';
import SwitchButton from "./SwitchButton";
import {ThemeContext} from "./ThemeContext";
import RadioGroup from "./RadioGroup";


const SettingsTab = (props) => {

    const {settings, setSettings} = props
    const switchParams = [{name: "switchCountScore", label: "Comptage des points"},
        {name: "switchTimer", label: "Timer"},
        {name: "switchDarkMode", label: "Dark Mode"}]

    if (settings) {
        return (

            <>
                <ThemeContext.Consumer>
                    {({theme, toggleTheme}) => {
                        const handleChange = (event) => {
                            const {name, value, checked} = event.target
                            setSettings((prevState) => ({
                                ...prevState,
                                [name]: value !== "on" ? value : checked,
                            }));

                            if (name === "switchDarkMode") {
                                toggleTheme()
                            }
                        }

                        return (
                            <div className={"text-start"}>
                                Nombre de joueurs :
                                <RadioGroup
                                    settings={settings}
                                    name={"nbPlayer"}
                                    radioParams={[{label: "4", value: "4"},
                                        {label: "8", value: "8"},
                                        {label: "12", value: "12"}
                                    ]}
                                    handleChange={handleChange}
                                />
                                <hr/>
                                Level :
                                <RadioGroup
                                    settings={settings}
                                    name={"level"}
                                    radioParams={[{label: "Easy", value: "3500"},
                                        {label: "Medium", value: "2000"},
                                        {label: "Hard", value: "1000"}
                                    ]}
                                    handleChange={handleChange}
                                />
                                <hr/>
                                {switchParams.map((mapping, index) => (
                                    <SwitchButton
                                        key={index}
                                        settings={settings}
                                        name={mapping.name}
                                        onChange={handleChange}
                                        label={mapping.label}
                                    />
                                ))}
                            </div>
                        )
                    }}
                </ThemeContext.Consumer>

            </>
        )
    } else {
        return null
    }
}

export default SettingsTab;
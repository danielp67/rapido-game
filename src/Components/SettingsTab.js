import React from 'react';
import SwitchButton from "../Shareable/SwitchButton";
import {ThemeContext} from "../Shareable/ThemeContext";
import RadioGroup from "../Shareable/RadioGroup";


const SettingsTab = (props) => {

    const {settings, setSettings} = props
    const switchParams = [{name: "switchCountScore", label: "Comptage des points"},
        {name: "switchTimer", label: "Timer"},
        {name: "switchDarkMode", label: "Dark Mode"}]

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
                            <div className="tab-pane fade" id="settings-tab-pane" role="tabpanel"
                                 aria-labelledby="settings-tab" tabIndex="0">
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
                            </div>
                        )
                    }}
                </ThemeContext.Consumer>

            </>
        )

}

export default SettingsTab;
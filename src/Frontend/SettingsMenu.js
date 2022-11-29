import React, {useReducer, useState} from 'react';
import SwitchButton from "./SwitchButton";
import RadioButton from "./RadioButton";
import {Theme, ThemeContext} from "./ThemeContext";
import Modal from "./Modal";


const SettingsMenu = (props) => {

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

                        <Modal id={"exampleModalToggle2"}>

                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalToggleLabel2">
                                <i className="fa fa-cog" aria-hidden="true"/> Settings
                            </h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"/>
                        </div>
                        <div className="modal-body">
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
                        <div className="modal-footer">

                            <button className="btn btn-secondary" data-bs-target="#staticBackdropSecond"
                                    data-bs-toggle="modal">
                                Cancel
                            </button>
                            <button onClick={submitForm} className="btn btn-primary"
                                    data-bs-target="#staticBackdropSecond" data-bs-toggle="modal">
                                Save
                            </button>

                        </div>
                        </Modal>

                  )}}
            </ThemeContext.Consumer>

        </>
    )
}
else{
    return null
}
}

export default SettingsMenu;
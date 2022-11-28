import React, {useState} from 'react';
import SwitchButton from "./SwitchButton";
import RadioButton from "./RadioButton";

const SettingsMenu = (props) => {

    const {setSettings} = props
    const [state, setState] = useState(
        {
            nbPlayer:"4",
            level:"hard",
            switchCountScore : true,
            switchTimer : true,
            switchDarkMode : false
        }
    )

    const handleChange = (event) => {
        const {name, value, checked} = event.target
console.log(name, value, checked)
        setState((prevState) => ({
            ...prevState,
            [name]: value !== "on" ? value : checked,
        }));
    }

    const submitForm = () => {
        console.log('submit', state)
    }


    return (

        <>
            <div className="modal fade" id="exampleModalToggle2" aria-hidden="true"
                 aria-labelledby="exampleModalToggleLabel2" tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
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
                                value={"easy"}
                                onChange={handleChange}
                                label={"Easy"}
                            />
                            <RadioButton
                                state={state}
                                name={"level"}
                                value={"medium"}
                                onChange={handleChange}
                                label={"Medium"}
                            />
                            <RadioButton
                                state={state}
                                name={"level"}
                                value={"hard"}
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

                            <button className="btn btn-secondary" data-bs-target="#staticBackdropSecond" data-bs-toggle="modal">
                                Cancel
                            </button>
                            <button onClick={submitForm} className="btn btn-primary" data-bs-target="#staticBackdropSecond" data-bs-toggle="modal">
                                Save
                            </button>

                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default SettingsMenu;
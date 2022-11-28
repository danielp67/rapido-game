import React from 'react';

const SwitchButton = (props) => {

    const {state, name, onChange, label} = props


    return (

        <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" role="switch" name={name}
                   onChange={onChange} checked={state[name]}/>
            <label className="form-check-label" htmlFor={name}>
                {label}
            </label>
        </div>

    )
}

export default SwitchButton;
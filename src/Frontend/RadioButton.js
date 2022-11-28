import React from 'react';

const RadioButton = (props) => {

    const {state, name, value, onChange, label} = props

    return (
        <div className="form-check">
            <input className="form-check-input" type="radio" name={name}
                   id={value} value={value} onChange={onChange}
                   checked={state[name] === value}
            />
            <label className="form-check-label" htmlFor={value}>
                {label}
            </label>
        </div>
    )
}

export default RadioButton;
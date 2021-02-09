import React from 'react';
import classes from './Input.module.css';

const input = props => {
    let inputElement = null;
    switch (props.elementType) {
        case 'input':
            inputElement = <input
                name={props.name}
                className={classes.InputElement}
                {...props.elementConfig}
                value={props.value}
                onChange={props.handleChange}
                onBlur={props.handleBlur}
            />
            break;
        default:
            return null;
    }
    return (
        <div className={classes.InputContainer}>
            <label>{props.label}</label>
            {inputElement}
        </div>
        
    )
}

export default input
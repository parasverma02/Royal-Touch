import classes from './ReadMoreButton.module.css';
import React from 'react';

const readMoreButton = (props) => {
    return(
        <button onClick={props.clicked} className={classes.Button}>{props.text}</button>
    )
}

export default readMoreButton;
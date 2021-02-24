import React from 'react';
import classes from './Header.module.css';
const header = props => {

    return (
        <div className={classes.Heading}>
            <h1>{props.heading}</h1>
        </div>
    );
};


export default header;
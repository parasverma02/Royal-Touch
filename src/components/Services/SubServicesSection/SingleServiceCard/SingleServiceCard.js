import React from 'react';
import classes from './SingleServiceCard.module.css'

const singleService = props => {
    return (
        <div className={classes.SingleService} onClick={props.serviceClicked}>
            <p>{props.serviceName}</p>
        </div>
    )
}

export default singleService
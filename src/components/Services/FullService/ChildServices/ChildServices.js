import React from 'react';
import classes from './ChildServices.module.css'

const childServices = props => {
    const services = props.services.map(service => {
        return <div className={classes.ChildService} key={service.id}>
            <h2>{service.name}</h2>
            <h3>{'$' + service.price}</h3>
            <p>{service.description}</p>
            </div>
    })
    return (services)
}

export default childServices;
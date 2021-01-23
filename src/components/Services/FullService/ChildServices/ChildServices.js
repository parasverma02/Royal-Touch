import React from 'react';

const childServices = props => {
    const services = props.services.map(service => {
        return <div key={service.id}>{service.name}</div>
    })
    return (
        <div>
            {services}
        </div>
    )
}

export default childServices
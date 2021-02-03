import React, { Component } from 'react';
import SingleService from './SingleServiceCard/SingleServiceCard';
import classes from './SubServiceSection.module.css';

class SubServices extends Component {

    render() {
        let services = this.props.service.subServices.map(service => (
            <SingleService
                key={service.id}
                serviceName={service.name}
                id={service.id}
                serviceClicked={() => this.props.serviceClicked(service.id, this.props.service.id)} />
        ))
        return (
            <div className={classes.SubService}>
                {/* <h3>{this.props.service.serviceName}</h3> */}
                <div className={classes.Services}>
                    {services}
                </div>
            </div>
        )
    }

}

export default SubServices
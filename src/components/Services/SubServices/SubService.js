import React, { Component } from 'react';
import SingleService from './SingleService/SingleService';
import classes from './SubService.module.css';
import { withRouter } from 'react-router-dom'

class SubServices extends Component {

    clickServiceHandler = service => {
        console.log(this.props)
        this.props.history.push({pathname: '/service/' + service})
    }
    render() {
        let services = this.props.subServices.map(service => (
            <SingleService 
                key={service}
                serviceName={service} 
                serviceClicked={() => this.props.serviceClicked(service)} />
            ))
        return (
            <div className={classes.SubService}>
                <h3>{this.props.serviceName}</h3>
                <div className={classes.Services}>
                    {services}
                </div>
            </div>
        )
    }
   
}

export default withRouter(SubServices)
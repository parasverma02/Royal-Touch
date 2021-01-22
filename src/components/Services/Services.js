import React, { Component } from 'react';
import classes from './Services.module.css';
import SubService from './SubServices/SubService';
// import SkinService1 from './Services/SkinService1';
// import { Route } from 'react-router-dom'
import ServicesData from '../../data/ServicesData'
class Services extends Component {

    state = {
        services: []
    }

    componentDidMount = () => {
        console.log('in Component did mount!')
        this.setState({services: ServicesData})
    }

    clickServiceHandler = id => {
        this.props.history.push({pathname: this.props.match.path + '/' + id})
    }

    render() {
        let subServices = this.state.services.map(service => {
            return <SubService 
                key={service.serviceName}
                service={service}
                serviceClicked={this.clickServiceHandler} />
        })

        return (
            <div className={classes.Container}>
                <h1 className={classes.Heading}>Services</h1>
                <div className={classes.SubHeading}> 
                    <h2>Skin Care</h2>
                    <h2>Hair Care</h2>
                    <h2>Makeup</h2>
                </div>
                <div>
                    {subServices}
                </div>

            </div>
        )
       
    }
} 

export default Services
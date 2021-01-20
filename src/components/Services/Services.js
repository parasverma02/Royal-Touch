import React, { Component } from 'react';
import classes from './Services.module.css';
import SubService from './SubServices/SubService';
import SkinService1 from './Services/SkinService1';
import { Route } from 'react-router-dom'
class Services extends Component {

    state = {
        services: [
            {
                serviceName: 'Skin Care',
                subServices: ['Skin Service1', 'Skin Service2', 'Skin Service3']
            },
            {
                serviceName: 'Hair Care',
                subServices: ['Hair Service1', 'Hair Service2', 'Hair Service3']
            },
            {
                serviceName: 'Makeup',
                subServices: ['Makeup Service1', 'Makeup Service2', 'Makeup Service3']
            }
        ],
        serviceClicked: false
    }

    componentDidMount = () => {
        this.setState({serviceClicked: false})
    }


    clickServiceHandler = service => {
        this.setState({serviceClicked: true})
        console.log(service)
        this.props.history.replace({pathname: this.props.match.path + '/Skin'})
    }

    render() {
        console.log(this.props)

        let subServices = this.state.services.map(service => {
            return <SubService 
                key={service.serviceName}
                serviceName={service.serviceName} 
                subServices={service.subServices}
                serviceClicked={this.clickServiceHandler} />
        })

        let serviceDisplay = (
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
        console.log(this.state.serviceClicked)
        if (this.state.serviceClicked){
            serviceDisplay = <Route path={this.props.match.path+ '/:Skin'} component={SkinService1} />
        }

        return (
           serviceDisplay
        )
       
    }
} 

export default Services
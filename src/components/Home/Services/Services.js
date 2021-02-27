import React, { Component } from 'react';
import classes from './Services.module.css';
import { connect } from 'react-redux';
import ServiceCard from './ServiceCard/ServiceCard';
import * as actionTypes from '../../../store/actions/actions';
import ReadMoreButton from '../../UI/Button/ReadMoreButton/ReadMoreButton';
import { withRouter } from 'react-router-dom';
class Services extends Component {

    componentDidMount = () => {
        if (this.props.services.length === 0) {
            this.props.onSetServices();
            console.log('Services1:' + this.props.services);
        }
        console.log('here')
    }
    clickHandler = () => {
        this.props.history.push({pathname: '/services'})
    }
    render() {

        const serviceCards = this.props.services.map(service =>
            <ServiceCard
                key={service.id}
                name={service.serviceName}
                description={service.description} />)
        return (
            <div className={classes.ServicesContainer}>
                <div className={classes.ServicesBody}>
                    <div className={classes.ServicesHeading}>
                        <div className={classes.ServiceHeadingContent}>
                            <h1>Our Services</h1>
                            <div className={classes.UnderLine}></div>
                        </div>
                    </div>

                    <div className={classes.ServicesContentContainer}>
                        <div className={classes.ServicesContent}>
                            {serviceCards}
                        </div>
                    </div>
                    <div className={classes.ViewServicesButton}>
                        <ReadMoreButton clicked={this.clickHandler} text="View All Services"/>
                    </div>
                </div>
            </div>
        )
    }

};

const mapStateToProps = (state) => {

    return {
        services: state.service.services
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        onSetServices: () => dispatch(actionTypes.set_services())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Services));
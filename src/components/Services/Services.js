import React, { Component } from 'react';
import classes from './Services.module.css';
import SubService from './SubServicesSection/SubServiceSection';
import * as actionTypes from '../../store/actions/actions';
import { connect } from 'react-redux';
class Services extends Component {

    componentDidMount = () => {
        
        this.props.onSetServices();
    }

    clickServiceHandler = (id, parentServiceID) => {
        const queryParams = encodeURIComponent('parentServiceID') + '=' + encodeURIComponent(parentServiceID)

        this.props.history.push({
            pathname: this.props.match.path + '/' + id,
            search: '?' + queryParams
        });
    }

    render() {
        let subServices = this.props.services.map(service => {
            return <SubService
                key={service.serviceName}
                service={service}
                serviceClicked={this.clickServiceHandler} />
        })

        return (
            <div className={classes.Container}>
                <div className={classes.Heading}>
                    <h1>Services</h1>
                </div>

                <div className={classes.SubHeading}>
                    <div>
                        <h2>Skin Care</h2>
                    </div>
                    <hr />
                    <div>
                        <h2>Hair Care</h2>
                    </div>
                    <hr />
                    <div>
                        <h2>Makeup</h2>
                    </div>
                </div>
                <div className={classes.ServicesContent}>
                    {subServices}
                </div>

            </div>
        )

    }
}

const mapStateToProps = state => {
    return {
        services: state.service.services
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSetServices: () => dispatch(actionTypes.set_services())
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Services)
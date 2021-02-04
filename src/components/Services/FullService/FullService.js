import React, { Component } from 'react';
import classes from './FullService.module.css';
import HeaderImage from '../../../assets/image4.jpg';
import ChildServices from './ChildServices/ChildServices';
import { connect } from 'react-redux';

class FullService extends Component {

    state = {
        id: null,
        service: null,
        parentService: null
    };

    componentDidMount = () => {
        const query = new URLSearchParams(this.props.location.search);
        
        const parentServiceID = query.get('parentServiceID');
        const id = this.props.match.params.id;
        
        for(const idx in this.props.services){
            if(this.props.services[idx].id === parentServiceID){
                const subServices = this.props.services[idx].subServices;
                for(const idx2 in subServices){
                    if(subServices[idx2].id === id){
                        this.setState({service: subServices[idx2], id: id});
                        break;
                    }
                }
            }
        }
       

        
    }
    render() {
        console.log(this.state)

        
        return (
           this.state.service? 
           <div className={classes.ServiceContainer}>
                <div className={classes.ServiceHeader}>
                    <div className={classes.ServiceHeading}>
                        <h1>{this.state.service? this.state.service.name: null}</h1>
                    </div>
                    <img src={HeaderImage} alt="This is pic"/>
                </div>
                <div className={classes.ChildServicesContainer}>
                    <ChildServices services={this.state.service.childServices} />
                </div>
                
            </div>
            : null
        )
    }
    
}

const mapStateToProps = state => {
    return {
        services: state.service.services
    };
};

export default connect(mapStateToProps)(FullService);
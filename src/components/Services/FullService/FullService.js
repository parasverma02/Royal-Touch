import React, { Component } from 'react';
import ServicesData from '../../../data/ServicesData'
import classes from './FullService.module.css'
import HeaderImage from '../../../assets/image4.jpg'
class FullService extends Component {

    state = {
        id: null,
        service: null,
        parentService: null
    };

    componentDidMount = () => {
        // console.log(this.props.location.search)
        const query = new URLSearchParams(this.props.location.search);
        
        const parentServiceID = query.get('parentServiceID');
        const id = this.props.match.params.id
        
        for(const idx in ServicesData){
            if(ServicesData[idx].id === parentServiceID){
                const subServices = ServicesData[idx].subServices
                for(const idx2 in subServices){
                    if(subServices[idx2].id === id){
                        this.setState({service: subServices[idx2], id: id})
                        break
                    }
                }
            }
        }
       

        
    }
    render() {
        console.log(this.state)
        
        return (
            <div className={classes.ServiceContainer}>
                <div className={classes.ServiceHeader}>
                    <div className={classes.ServiceHeading}>
                        <h1>{this.state.service? this.state.service.name: null}</h1>
                    </div>
                    <img src={HeaderImage} alt="This is pic"/>
                </div>
                
            </div>
        )
    }
    
}

export default FullService
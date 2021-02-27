import React from 'react';
import classes from './ServiceCard.module.css';
// import image from '../../../../assets/HomeImages/SkinCare.png';


const serviceCard = (props) => {

    return (
        <div className={classes.ServiceCardContainer}>
            <div className={classes.ServiceCardContent}>
                <div className={classes.ServiceCardImage}>
                    {console.log('../../../../assets/HomeImages/'+ props.name.split(" ").join("") +'.png')}
                    <img src={require('../../../../assets/HomeImages/'+ props.name.split(" ").join("") +'.png')} alt={props.name} />
                </div>
                <div className={classes.ServiceCardFooter}>
                    <h2>{props.name}</h2>
                </div>
            </div>
        </div>
    )
};

export default serviceCard;
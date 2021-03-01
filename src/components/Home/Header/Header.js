import classes from './Header.module.css';
import React from 'react';
import InfoBar from '../../InfoBar/InfoBar';


const header = () => {
    return (
        <div className={classes.Header}>
            
            <img src={require('../../../assets/image4.jpg')} alt="header"/>
            <InfoBar />
        </div>
    )
}

export default header;
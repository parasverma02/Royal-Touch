import React from 'react';
import AboutUs from './AboutUs/AboutUs';
import Services from './Services/Services';
import Galary from './Galary/Galary';
import classes from './Home.module.css';

// import ImageSlider from './ImageSlider/ImageSlider'
const home = props => {
    return (
        <div className={classes.Container}>
            <div className={classes.Header}>
            </div>   
            <AboutUs />
            <Services />
            <Galary />
        </div>
    )
}

export default home
import React from 'react'

import classes from './Home.module.css';
import ImageSlider from './ImageSlider/ImageSlider'
const home = props => {
    return (
        <div className={classes.Container}>
            <ImageSlider />    
        </div>
    )
}

export default home
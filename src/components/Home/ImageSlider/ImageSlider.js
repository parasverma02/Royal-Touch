import React, { Component } from 'react';
import Image1 from '../../../assets/image1.jpg'
// import Image2 from '../../../assets/image2.jpg'
// import Image3 from '../../../assets/image3.jpg'
// import Image4 from '../../../assets/image4.jpg'

import classes from './ImageSlider.module.css'



class ImageSlider extends Component {
    
    state = {
        image: Image1
    }
  

    componentDidMount(){
       
    
    }
    imageSliderHandler = props => {

   
    }

    render() {
        return (
            <div className={classes.ImageSlider}>
            <div className={classes.Image}>
                <img src={this.state.image} alt='bride' onClick={this.imageSliderHandler} />
            </div>
            </div>
        )
    }
}

export default ImageSlider
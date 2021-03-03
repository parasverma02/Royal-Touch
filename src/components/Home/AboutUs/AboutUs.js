import React, { useContext } from 'react';
import classes from './AboutUs.module.css';
import image from '../../../assets/image2.jpg';
import ReadMoreButton from '../../UI/Button/ReadMoreButton/ReadMoreButton';
import { withRouter } from 'react-router-dom';
import MainInfoContext from '../../../context/mainInfoContext';
const AboutUs = (props) => {

    const clickHandler = () => {
        props.history.push({ pathname: '/about' })
    }
    const mainContext = useContext(MainInfoContext);
    
    const aboutUsText = <p>{mainContext.about.description}</p>
    return (
        <div className={classes.AboutUs}>
            <div className={classes.AboutUsContainer}>
                <div className={classes.ContentLeft}>
                    <div className={classes.ImageContainer}>
                            <img src={image} alt="Image1" />
                    </div>
                </div>
                <div className={classes.ContentRightContainer}>
                    <div className={classes.ContentRight}>
                        <div className={classes.AboutUsHeading}>
                            <div>
                                <h1>About Us</h1>
                                <div className={classes.UnderLine}></div>
                            </div>

                        </div>
                        <div className={classes.AboutUsText}>
                            {aboutUsText}
                        </div>
                        <div className={classes.AboutUsButton}>
                            <ReadMoreButton clicked={clickHandler} text='Read More' />
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
};

export default withRouter(AboutUs);
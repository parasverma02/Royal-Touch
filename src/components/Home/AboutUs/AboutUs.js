import React from 'react';
import classes from './AboutUs.module.css';
import image from '../../../assets/image2.jpg';
import ReadMoreButton from '../../UI/Button/ReadMoreButton/ReadMoreButton';
import { withRouter } from 'react-router-dom';

const aboutUs = (props) => {

    const clickHandler = () => {
        props.history.push({ pathname: '/about' })
    }
    const aboutUsText = <p>At as in understood an remarkably solicitude. Mean them
    very seen she she. Use totally written the observe pressed
    justice. Instantly cordially far intention recommend estimable
    yet her his. Ladies stairs enough esteem add fat all enable.
    Needed its design number winter see. Oh be me sure wise sons no.
    Piqued ye of am spirit regret. Stimulated discretion impossible
    admiration in particular conviction up. At as in understood an remarkably solicitude. Mean them
    very seen she she. Use totally written the observe pressed
    justice. </p>
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

export default withRouter(aboutUs);
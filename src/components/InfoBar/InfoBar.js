import classes from './InfoBar.module.css';
import React from 'react';
import MoreButton from '../UI/Button/ReadMoreButton/ReadMoreButton';
const infoBar = () => {
    return (
        <div className={classes.InfoBarContainer}>
            <div className={classes.InfoBar}>
                <div className={classes.Contact}>
                    <div className={classes.IconContainer}>
                        <i className={"fa fa-phone-square " + classes.Icon} />
                    </div>
                    <div className={classes.InfoContainer}>
                        <p>+1(226)507-4804</p>
                        <p>v.paras2@gmail.com</p>
                    </div>

                </div>
                <div className={classes.Location}>
                    <div className={classes.IconContainer}>
                        <i className={"fa fa-map-marker " + classes.Icon} />
                    </div>
                    <div className={classes.InfoContainer}>
                        <p>267, Shivala Colony, Amritsar, Punjab 143001</p>
                    </div>
                </div>
                <div className={classes.Timings}>
                    <div className={classes.IconContainer}>
                        <i className={"fa fa-clock-o " + classes.Icon} />
                    </div>
                    <div className={classes.InfoContainer}>
                        <ul className={classes.HoursList}>
                            <li>Monday: 10:00am to 8:00pm</li>
                            <li>Tuesday - Friday: 9:00am to 8:00pm</li>
                            <li>Saturday: 9:00am to 6:00pm</li>
                            <li>Sunday: Closed</li>
                        </ul>
                    </div>

                </div>
                <div className={classes.Book}>
                    <MoreButton text="Book Appointment" />
                </div>
            </div>
        </div>
    )
}

export default infoBar;
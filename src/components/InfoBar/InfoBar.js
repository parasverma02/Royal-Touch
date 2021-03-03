import classes from './InfoBar.module.css';
import React, { useContext } from 'react';
import MoreButton from '../UI/Button/ReadMoreButton/ReadMoreButton';
import MainInfoContext from '../../context/mainInfoContext';
const InfoBar = () => {

    const infoContext = useContext(MainInfoContext);
    const contact = infoContext.contact;
    const hours = infoContext.hours;

    return (
        <div className={classes.InfoBarContainer}>
            <div className={classes.InfoBar}>
                <div className={classes.Contact}>
                    <div className={classes.IconContainer}>
                        <i className={"fa fa-phone-square " + classes.Icon} />
                    </div>
                    <div className={classes.InfoContainer}>
                        <p>{contact.phone}</p>
                        <p>{contact.email}</p>
                    </div>

                </div>
                <div className={classes.Location}>
                    <div className={classes.IconContainer}>
                        <i className={"fa fa-map-marker " + classes.Icon} />
                    </div>
                    <div className={classes.InfoContainer}>
                        <p>{contact.address}</p>
                    </div>
                </div>
                <div className={classes.Timings}>
                    <div className={classes.IconContainer}>
                        <i className={"fa fa-clock-o " + classes.Icon} />
                    </div>
                    <div className={classes.InfoContainer}>
                        <ul className={classes.HoursList}>
                            <li>Monday: {hours.monday}</li>
                            <li>Tuesday - Friday: {hours.tuesday_friday}</li>
                            <li>Saturday: {hours.saturday}</li>
                            <li>Sunday: {hours.sunday}</li>
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

export default InfoBar;
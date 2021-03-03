import React, { useContext } from 'react'
import classes from './Footer.module.css';
import './FooterExtraStyling.css';
import MainInfoContext from '../../context/mainInfoContext';
const Footer = props => {

    const infoContext = useContext(MainInfoContext);
    const contact = infoContext.contact;
    const hours = infoContext.hours;

    return (
        <div className={classes.Footer}>
            <footer>
                <div className={classes.FooterHolder}>
                    <div className={classes.Widget}>
                        <h3>QUICK LINKS</h3>
                        <ul>
                            <li><a href="/">HOME</a></li>
                            <li><a href="/">STORE</a></li>
                            <li><a href="/">ABOUT</a></li>
                            <li><a href="/">SERVICES</a></li>
                            <li><a href="/">GALARY</a></li>
                            <li><a href="/">CONTACT</a></li>
                        </ul>
                    </div>
                    <div className={classes.Widget}>
                        <h3>CONTACT US</h3>
                        <dl className={classes.ContactUs}>
                            <hr />
                            <dt>Address:</dt>
                            <dd>{contact.address}</dd>
                            <hr />
                            <dt>Phone:</dt>
                            <dd>{contact.phone}</dd>
                            <hr />
                            <dt>Email:</dt>
                            <dd>{contact.email}</dd>
                            <hr />

                        </dl>
                    </div>
                    <div className={classes.Widget}>
                        <h3>HOURS</h3>
                        <ul className={classes.HoursList}>
                            <li>Monday: {hours.monday}</li>
                            <li>Tuesday - Friday: {hours.tuesday_friday}</li>
                            <li>Saturday: {hours.saturday}</li>
                            <li>Sunday: {hours.sunday}</li>
                        </ul>
                    </div>
                    <div className={classes.Widget}>
                        <h3>CONNECT WITH US</h3>
                        <div className={classes.SocialMediaIcons}>
                            <a href="/" className="fa fa-facebook" > </a>
                            <a href="/" className="fa fa-instagram" > </a>
                            <a href="/" className="fa fa-twitter" > </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>

    )
}

export default Footer;
import React from 'react'
import classes from './Footer.module.css';
import './FooterExtraStyling.css'
const footer = props => {

    return (
        <div className={classes.Footer}>
            <footer>
                <div class={classes.FooterHolder}>
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
                            <dd>267, Shivala Colony, Amritsar, Punjab 143001</dd>
                            <hr />
                            <dt>Phone:</dt>
                            <dd>+1(226)507-4804</dd>
                            <hr />
                            <dt>Email:</dt>
                            <dd>v.paras2@gmail.com</dd>
                            <hr />
                            
                        </dl>
                    </div>
                    <div className={classes.Widget}>
                        <h3>HOURS</h3>
                        <ul className={classes.HoursList}>
                            <li>Monday: 10:00am to 8:00pm</li>
                            <li>Tuesday - Friday: 9:00am to 8:00pm</li>
                            <li>Saturday: 9:00am to 6:00pm</li>
                            <li>Sunday: Closed</li>
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


/*

 */
export default footer
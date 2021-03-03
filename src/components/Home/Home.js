import React, { useEffect } from 'react';
import AboutUs from './AboutUs/AboutUs';
import Services from './Services/Services';
import Galary from './Galary/Galary';
import classes from './Home.module.css';
import LazyLoad from 'react-lazyload';
import Header from './Header/Header';
const Home = props => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, []);

    return (

        <div className={classes.Container}>
            <div className={classes.Header}>
                <Header />
            </div>
            <LazyLoad offset={50}>
                <AboutUs />
            </LazyLoad>
            <LazyLoad offset={50}>
                <Services />
            </LazyLoad>
            <LazyLoad offset={70}>
                <Galary />
            </LazyLoad>
        </div>
    )
}


export default Home;
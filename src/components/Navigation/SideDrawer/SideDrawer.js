import React, { Fragment } from 'react';
import classes from './SideDrawer.module.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
const sideDrawer = props => {
    let DrawerClasses = [classes.SideDrawer, classes.Close];
    if(props.open) {
        DrawerClasses = [classes.SideDrawer, classes.open];
    }
    return (
        <Fragment>
            <Backdrop show={props.open} close={props.closed}/>
             <nav className={DrawerClasses.join(' ')}>
                    <NavigationItems  closeSideMenu={props.closed}/>
            </nav>
        </Fragment>
    );
}

export default sideDrawer
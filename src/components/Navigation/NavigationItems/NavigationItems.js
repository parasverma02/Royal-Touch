import React from 'react';
import NavItem from './NavItem/NavItem';
import classes from './NavigationItems.module.css'
const navigationItems = props => {
    return (
        <ul className={classes.NavigationItems}>
            <NavItem link='/home' exact closeSideMenu={props.closeSideMenu}>HOME</NavItem>
            <NavItem link='/store' closeSideMenu={props.closeSideMenu}>STORE</NavItem>
            <NavItem link='/about' closeSideMenu={props.closeSideMenu}>ABOUT</NavItem>
            <NavItem link='/services' closeSideMenu={props.closeSideMenu}>SERVICES</NavItem>
            <NavItem link='/galary' closeSideMenu={props.closeSideMenu}>GALARY</NavItem>
            <NavItem link='/contact' closeSideMenu={props.closeSideMenu}>CONTACT</NavItem>
        </ul>
    )
}
export default navigationItems

import React from 'react';
import NavItem from './NavItem/NavItem';
import classes from './NavigationItems.module.css'
const navigationItems = props => {
    return (
        <ul className={classes.NavigationItems}>
            <NavItem link='/home' exact >HOME</NavItem>
            <NavItem link='/store' >STORE</NavItem>
            <NavItem link='/about' >ABOUT</NavItem>
            <NavItem link='/services' >SERVICES</NavItem>
            <NavItem link='/galary' >GALARY</NavItem>
            <NavItem link='/contact' >CONTACT</NavItem>
        </ul>
    )
}
export default navigationItems

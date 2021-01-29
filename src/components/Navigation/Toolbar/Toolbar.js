import React from 'react';
import classes from './Toolbar.module.css'
import NavigationItems from '../NavigationItems/NavigationItems'
import './ToolbarExtra.css'
const toolbar = props => {
    return (
        <header className={classes.Toolbar}>
            <div className={classes.ToolbarContent}>
                <div className={classes.Bar}>
                    <i onClick={props.sideMenuToggle} className="fa fa-bars"></i>
                </div>
                <div className={classes.Logo}>
                    <p>Royal Touch</p>
                </div>
                <nav className={classes.DesktopOnly}>
                    <NavigationItems />
                </nav>
            </div>

        </header>
    )
}

export default toolbar
import React from 'react';
import classes from './NavItem.module.css';
import { NavLink} from 'react-router-dom';
const navItem = props => (
    <li className={classes.NavItem} >
        <NavLink to={props.link} activeStyle={{color: '#000000', fontWeight: "bold"}} onClick={props.closeSideMenu}>{props.children}</NavLink>
    </li>
)

export default navItem
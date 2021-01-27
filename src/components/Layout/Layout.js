import React, { Component } from 'react';
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'
import Footer from '../Footer/Footer';
import classes from './Layout.module.css'
class Layout extends Component {
    render () {
        return(
            <div className={classes.Layout}>
                <div className={classes.Content}>
                    <Toolbar />
                    <SideDrawer />
                    <main>
                        {this.props.children}
                    </main>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Layout
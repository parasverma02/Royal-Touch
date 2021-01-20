import React, { Component, Fragment } from 'react';
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'
import Footer from '../Footer/Footer';
import classes from './Layout.module.css'
class Layout extends Component {
    render () {
        return(
            <Fragment>
                <div className={classes.Content}>
                    <Toolbar />
                    <SideDrawer />
                    <main>
                        {this.props.children}
                    </main>
                </div>
                <Footer />
            </Fragment>
        )
    }
}

export default Layout
import React, { Component } from 'react';
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'
import Footer from '../Footer/Footer';
import classes from './Layout.module.css'
class Layout extends Component {

    state = {
        showSideMenu: false
    };

    showSideMenuCloseHandler = () => {
        
        this.setState({ showSideMenu: false })
    }
    showSideMenuToggleHandler = () => {
        console.log("side menu open")
        this.setState(prevState => ({ showSideMenu: !prevState.showSideMenu }))
    }
    render() {
        return (
            <div className={classes.Layout}>
                <div className={classes.Content}>
                    <Toolbar sideMenuToggle={this.showSideMenuToggleHandler} />
                    <SideDrawer
                        open={this.state.showSideMenu}
                        closed={this.showSideMenuCloseHandler} />
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
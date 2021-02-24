import React, { Component } from 'react';
import classes from './Store.module.css';
import { connect } from 'react-redux';
import Header from '../Header/Header';

class Store extends Component {
   
    render() {
        console.log(this.props.items)
        return (
            <div className={classes.Container}>
                <Header heading='Store' />
                <div className={classes.ItemsContainer}>
                    <div className={classes.ItemsHeader}>
                        <h3>Items Header</h3>
                    </div>
                    <div className={classes.ItemsMainBody}>
                        <div className={classes.FilterBody}>
                            <h3>This is Filter Body</h3>
                        </div>
                        <div className={classes.ItemsBody}>
                            <h3>This is Items Body</h3>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        items: state.store.items
    };
};

export default connect(mapStateToProps)(Store);
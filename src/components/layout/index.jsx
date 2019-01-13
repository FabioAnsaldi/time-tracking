'use strict';

import React, {Component} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import * as actions from './actions';
import * as functions from './functions';
import * as VIEWS from '../../views/**/index.jsx';
import Topbar from '../../widgets/Topbar/index.jsx';
import AlertDialog from '../../widgets/AlertDialog/index.jsx';
import WinDialog from '../../widgets/WinDialog/index.jsx';
import {Application} from "../application";

export class Layout extends Component {

    render() {

        const {classes} = this.props;

        return (
            <div>
                <header>
                    <Topbar/>
                </header>
                <main>
                    <Switch>

                    </Switch>
                    <AlertDialog/>
                    <WinDialog/>
                </main>
                <footer className={classes.wrapper}>
                    <p>Powered by React + Redux</p>
                </footer>
            </div>
        );
    }
}

function mapStateToProps(state) {

    return {

        layoutReducer: state.layoutReducer,
        applicationReducer: state.applicationReducer
    };
}

export default withRouter(connect(mapStateToProps)(Layout));

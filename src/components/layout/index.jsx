'use strict';

import React, {Component} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import * as actions from './actions';
import * as functions from './functions';
import Topbar from '../widgets/topbar/index.jsx';
//import AlertDialog from '../../widgets/AlertDialog/index.jsx';
//import WinDialog from '../../widgets/WinDialog/index.jsx';

export class Layout extends Component {

    render() {

        return (
            <div>
                <header>
                    <Topbar/>
                </header>
                <main>
                    <Switch>
                        {this.props.applicationState.pages}
                    </Switch>
                </main>
                <footer>
                    <p>Powered by React + Redux</p>
                </footer>
            </div>
        );
    }
}

function mapStateToProps(state) {

    return {

        layoutState: state.layoutState,
        applicationState: state.applicationState,
    };
}

export default withRouter(connect(mapStateToProps)(Layout));

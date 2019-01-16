'use strict';

import React, {Component} from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import * as actions from './actions';
import Topbar from '../widgets/topbar/index.jsx';
import * as VIEWS from '../views/**/index.jsx';
//import AlertDialog from '../../widgets/AlertDialog/index.jsx';
//import WinDialog from '../../widgets/WinDialog/index.jsx';

export class Layout extends Component {

    render() {

        const defaultView = this.props.applicationState.routes.reduce((accumulator, current, i) => {

            return current.default ? (<Redirect from="/" to="/home"/>) : accumulator;
        }, {});

        const viewsList = (
            <Switch>
                {this.props.applicationState.routes.map((obj, i) => (
                    <Route key={i} exact path={obj.path} component={VIEWS[obj.viewFolderName]}/>
                ))}
                {defaultView}
            </Switch>
        );

        return (
            <div>
                <header>
                    <Topbar/>
                </header>
                <main>
                    {viewsList}
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

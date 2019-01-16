'use strict';

import React, {Component, Suspense, lazy} from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';

import * as VIEWS from '../views/**/index.jsx';
//import AlertDialog from '../../widgets/AlertDialog/index.jsx';
//import WinDialog from '../../widgets/WinDialog/index.jsx';
const Topbar = lazy(() => import('../widgets/topbar/index.jsx'));

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
                    <Suspense fallback={<div></div>}>
                        <Topbar/>
                    </Suspense>
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

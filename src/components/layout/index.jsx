'use strict';

import React, {Component} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import * as actions from './actions';
import * as functions from './functions';
import * as VIEWS from '../views/**/index.jsx';
//import Topbar from '../../widgets/Topbar/index.jsx';
//import AlertDialog from '../../widgets/AlertDialog/index.jsx';
//import WinDialog from '../../widgets/WinDialog/index.jsx';

export class Layout extends Component {

    setDefaultView() {

        let view = this.props.applicationReducer.routes.find((item) => {

            return item.default;
        });
        return (
            <Redirect push to={{pathname: view.path}}/>
        )
    }

    setViews(props) {
        let menu = props.applicationReducer.routes;
        let rows = [];
        for (let i in menu) {
            if (menu.hasOwnProperty(i)) {
                let page = menu[i].viewFolderName;
                let path = menu[i].path;
                if (page in VIEWS) {
                    if (menu[i].default) {
                        path = null;
                    }
                    rows.push(<Route key={i} exact path={path} component={VIEWS[page]}/>);
                }
            }
        }
        this.props.dispatch(actions.setPages(rows));
    }

    componentWillMount() {
        console.log( 'Main componentWillMount' );
        //this.setViews( this.props );
    }

    render() {

        return (
            <div>
                <header>

                </header>
                <main>
                    <Switch>

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

        layoutReducer: state.layoutReducer,
        applicationReducer: state.applicationReducer,
    };
}

export default withRouter(connect(mapStateToProps)(Layout));

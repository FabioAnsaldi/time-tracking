'use strict';

import React, {Component} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import * as actions from './actions';
import * as functions from './functions';
import Topbar from '../widgets/topbar/index.jsx';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import HomeIcon from "@material-ui/core/SvgIcon/SvgIcon";
import ListItemText from "@material-ui/core/ListItemText";
import * as VIEWS from '../views/**/index.jsx';
//import AlertDialog from '../../widgets/AlertDialog/index.jsx';
//import WinDialog from '../../widgets/WinDialog/index.jsx';

export class Layout extends Component {

    render() {

        const viewsList = (
            <Switch>
                {this.props.applicationState.routes.map((obj, i) => (
                    <Route key={i} exact path={obj.path} component={VIEWS[obj.viewFolderName]}/>
                ))}
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

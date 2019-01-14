'use strict';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from './actions';
import Layout from '../layout/index.jsx';
import {Redirect, Route} from "react-router-dom";
import * as VIEWS from '../views/**/index.jsx';

export class Application extends Component {


    setDefaultView() {

        let view = this.props.applicationState.routes.find((item) => {

            return item.default;
        });
        return (
            <Redirect push to={{pathname: view.path}}/>
        )
    }

    setViews(props) {

        let menu = props.applicationState.routes;
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

        this.setViews( this.props );
    }

    render() {

        return (
            <Layout/>
        );
    }
}

function mapStateToProps(state) {

    return {

        applicationState: state.applicationState
    };
}

export default connect(mapStateToProps)(Application);

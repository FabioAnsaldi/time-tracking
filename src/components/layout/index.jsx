'use strict';

import React, {Component} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import * as actions from './actions';
import * as functions from './functions';
//import * as VIEWS from '../../views/**/index.jsx';
//import Topbar from '../../widgets/Topbar/index.jsx';
//import AlertDialog from '../../widgets/AlertDialog/index.jsx';
//import WinDialog from '../../widgets/WinDialog/index.jsx';

export class Layout extends Component {

    render() {

        return (
            <div>
                <header>

                </header>
                <main>

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
    };
}

export default withRouter(connect(mapStateToProps)(Layout));

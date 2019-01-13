'use strict';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import * as homeActions from './actions';
import * as homeFunctions from './functions';

export class Home extends Component {

    render() {

        return (
            <div>
                Home page
            </div>
        );
    }
}

function mapStateToProps(state) {

    return {

        homeReducer: state.homeReducer
    };
}

export default withRouter(connect(mapStateToProps)(Home));

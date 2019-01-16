'use strict';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import * as actions from './actions';

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

        homeState: state.homeState
    };
}

export default withRouter(connect(mapStateToProps)(Home));

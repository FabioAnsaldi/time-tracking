'use strict';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import Layout from '../layout/index.jsx';

export class Application extends Component {

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

export default withRouter(connect(mapStateToProps)(Application));

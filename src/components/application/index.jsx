'use strict';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from './actions';
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

export default connect(mapStateToProps)(Application);

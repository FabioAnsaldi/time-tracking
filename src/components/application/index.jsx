'use strict';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from './actions';
import * as functions from './functions';

export class Application extends Component {

    render() {

        return (
            <div>A</div>
        );
    }
}

function mapStateToProps(state) {

    return {

        applicationReducer: state.applicationReducer
    };
}

export default connect(mapStateToProps)(Application);

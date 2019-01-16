'use strict';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import * as actions from './actions';

export class Tracking extends Component {

    render() {

        return (
            <div>
                Tracking page
            </div>
        );
    }
}

function mapStateToProps(state) {

    return {

        trackingState: state.trackingState
    };
}

export default withRouter(connect(mapStateToProps)(Tracking));

'use strict';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import Grid from '@material-ui/core/Grid';
import Addnew from '../../widgets/addnew/index.jsx';

export class Tracking extends Component {

    render() {

        return (
            <div>
                <Grid container spacing={24}>
                    <Grid item xs={12}>
                        <Addnew/>
                    </Grid>
                </Grid>
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

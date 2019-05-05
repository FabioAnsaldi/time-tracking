'use strict';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import Grid from "@material-ui/core/Grid";

export class Home extends Component {

    render() {

        return (
            <div>
                <Grid container spacing={24}>
                    <Grid item xs={12}>
                        <h1> Welcome to the Time Tracking project</h1>
                        <p>Navigate the <b>Menu</b> and go to <b>Tracking</b> page</p>
                        <p>You will find little widget you can <b>create</b> a nwe project or <b>start</b> tracking the time spent to the project</p>
                        <p><b>Enjoy it!</b></p>
                    </Grid>
                </Grid>
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

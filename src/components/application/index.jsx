'use strict';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import axios from 'axios';
import Layout from '../layout/index.jsx';
import layoutState from '../layout/reducer.js';
import * as actions from './actions';
import {withReducer} from "../../combiner/withReducer";

export class Application extends Component {

    componentWillMount() {

        axios({

            method: 'get',
            baseURL: `http://${process.env.API_URL.database.address}:${process.env.API_URL.database.port}`,
            url: '/routes',
            timeout: 500,
        })
            .then((response) => {

                this.props.dispatch(actions.setRoutes(response.data));
            });
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

export default withReducer("layoutState", layoutState)(Application);

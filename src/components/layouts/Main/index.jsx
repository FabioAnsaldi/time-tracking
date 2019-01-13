'use strict';

import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import * as mainActions from './actions';
import * as VIEWS from '../../views/**/index.jsx';
import Topbar from '../../widgets/Topbar/index.jsx';
import AlertDialog from '../../widgets/AlertDialog/index.jsx';
import WinDialog from '../../widgets/WinDialog/index.jsx';

const styles = {
    wrapper: {
        textAlign: 'center',
        position: 'relative',
        width: '100%'
    }
};

export class Main extends Component {

    setViews( props ) {
        let menu = props.controllerReducer.routes;
        let rows = [];
        for ( let i in menu ) {
            if ( menu.hasOwnProperty( i ) ) {
                let page = menu[ i ].viewFolderName;
                let path = menu[ i ].path;
                if ( page in VIEWS ) {
                    if ( menu[ i ].default ) {
                        path = null;
                    }
                    rows.push( <Route key={i} exact path={path} component={VIEWS[ page ]}/> );
                }
            }
        }
        this.props.dispatch( mainActions.setPages( rows ) );
    }

    setDefaultView() {
        let view = this.props.controllerReducer.routes.find( ( item ) => {
            return item.default;
        } );
        return (
            <Redirect push to={{ pathname: view.path }}/>
        )
    }

    componentWillMount() {
        console.log( 'Main componentWillMount' );
        this.setViews( this.props );
    }

    componentWillUpdate( nextProps ) {
        console.log( 'Main componentWillUpdate' );
    }

    render() {
        console.log( 'Main rendering ...' );
        const { classes } = this.props;

        return (
            <div>
                <header>
                    <Topbar/>
                </header>
                <main>
                    <Switch>
                        {this.props.mainReducer.pages}
                        {this.setDefaultView()}
                    </Switch>
                    <AlertDialog/>
                    <WinDialog/>
                </main>
                <footer className={classes.wrapper}>
                    <p>Powered by React + Redux</p>
                </footer>
            </div>
        );
    }

    componentDidUpdate() {
        console.log( 'Main componentDidUpdate' );
    }

    componentDidMount() {
        console.log( 'Main componentDidMount' );
    }
}

function mapStateToProps( state ) {
    return {
        mainReducer: state.mainReducer,
        controllerReducer: state.controllerReducer
    };
}

Main.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withRouter( connect( mapStateToProps )( withStyles( styles )( Main ) ) );

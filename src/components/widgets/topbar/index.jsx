'use strict';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link, withRouter} from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import TrackChanges from '@material-ui/icons/TrackChanges';
import HomeIcon from '@material-ui/icons/Home';
import * as actions from "./actions";

export class Topbar extends Component {

    constructor(props) {

        super(props);
        this.toggleDrawer = this.toggleDrawer.bind(this);
    }

    toggleDrawer() {

        const {open} = this.props.topbarState;

        this.props.dispatch(actions.setOpen(!open));
    };

    render() {

        const menuList = (
            <List>
                {this.props.applicationState.routes.map((obj, index) => (
                    <ListItem button key={obj.viewFolderName}>
                        <ListItemIcon>{index % 2 === 0 ? <HomeIcon/> : <TrackChanges/>}</ListItemIcon>
                        <Link to={obj.path}><ListItemText primary={obj.label}/></Link>
                    </ListItem>
                ))}
            </List>
        );
        const {open} = this.props.topbarState;

        return (
            <AppBar position="static">
                <Toolbar>
                    <IconButton color="inherit" aria-label="Menu" onClick={this.toggleDrawer}>
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" color="inherit"> News </Typography>
                </Toolbar>
                <Drawer open={open} onClose={this.toggleDrawer}>
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={this.toggleDrawer}
                    >
                        {menuList}
                    </div>
                </Drawer>
            </AppBar>
        );
    }
}

function mapStateToProps(state) {

    return {

        topbarState: state.topbarState,
        applicationState: state.applicationState
    };
}


export default withRouter(connect(mapStateToProps)(Topbar));

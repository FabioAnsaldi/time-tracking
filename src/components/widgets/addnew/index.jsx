'use strict';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import * as actions from "./actions";
import axios from "axios";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import WorkIcon from '@material-ui/icons/Work';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import Paper from '@material-ui/core/Paper';
import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 600,
    },
});

export class Addnew extends Component {

    constructor(props) {

        super(props);
        this.newProject = this.newProject.bind(this);
        this.setNewValue = this.setNewValue.bind(this);
    }

    componentWillMount() {

        axios({

            method: 'get',
            baseURL: `http://${process.env.API_URL.database.address}:${process.env.API_URL.database.port}`,
            url: '/projects',
            timeout: 500,
        })
            .then((response) => {

                this.props.dispatch(actions.setProjects(response.data));
            });
    }

    setNewValue(e) {


        this.props.dispatch(actions.setValue(e.target.value));
    }

    newProject(e) {

        let {projects, value} = this.props.addnewState;
        let date = new Date();

        e.preventDefault();
        if (!value.trim()) {

            return;
        }

        let newProject = {

            name: value,
            created: date.toString(),
            startTime: 0,
            time: 0
        };
        projects.push(newProject);
        this.props.dispatch(actions.addNewProject(projects));
    };

    render() {

        const {classes} = this.props;

        const viewsList = this.props.addnewState.projects.map((obj, i) => {

            return (
                <ListItem key={i}>
                    <Avatar><WorkIcon/></Avatar>
                    <ListItemText primary={obj.name} secondary={obj.created}/>
                </ListItem>
            )
        });

        return (
            <div>
                <Paper>
                    <h1>Add new project</h1>
                </Paper>
                <Paper>
                    <form onSubmit={this.newProject}>
                        <Input value={this.props.addnewState.value} onChange={this.setNewValue}/>
                        <Button variant="contained" type="submit" onClick={this.newProject}>
                            Add new
                        </Button>
                    </form>
                </Paper>
                <h2>Projects List</h2>
                <List className={classes.root}>
                    {viewsList}
                </List>
            </div>
        );
    }
}

function mapStateToProps(state) {

    return {

        addnewState: state.addnewState
    };
}

export default withRouter(withStyles(styles)(connect(mapStateToProps)(Addnew)));

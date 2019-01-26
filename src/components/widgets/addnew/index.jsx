'use strict';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import * as actions from "./actions";
import axios from "axios";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';
import WorkIcon from '@material-ui/icons/Work';
import Button from '@material-ui/core/Button';
import PlayArrow from '@material-ui/icons/PlayArrow';
import Typography from '@material-ui/core/Typography';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import {withStyles} from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 600,
    }
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

    getDifferenceTime(date1, date2) {

        date1 = new Date(date1);
        date2 = new Date(date2);

        let res = Math.abs(date1 - date2) / 1000;
        let days = Math.floor(res / 86400);
        let hours = Math.floor(res / 3600) % 24;
        let minutes = Math.floor(res / 60) % 60;
        let seconds = res % 60;

        return {days, hours, minutes, seconds}
    }

    dateFormatter(obj) {

        let date = this.getDifferenceTime(obj.startTime, obj.time);

        return `${date.days} Days, ${date.hours} hours, ${date.minutes} minutes, ${date.seconds} minutes`;
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
        this.props.dispatch(actions.setValue(e.target.value));
    };

    render() {

        const {classes} = this.props;

        const viewsList = this.props.addnewState.projects.map((obj, i) => {

            return (
                <ListItem key={i}>
                    <Avatar><WorkIcon/></Avatar>
                    <ListItemText primary={obj.name} secondary={
                        <React.Fragment>
                            <Typography component="span" color="textPrimary">
                                {obj.created}
                            </Typography>
                            {this.dateFormatter(obj)}
                        </React.Fragment>
                    }/>
                    <ListItemSecondaryAction>
                        <IconButton aria-label="Record"> <PlayArrow/> </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
            )
        });

        return (
            <div>
                <Paper>
                    <h2>Add new project</h2>
                    <form onSubmit={this.newProject}>
                        <Grid container spacing={24}>
                            <Grid item xs={2}>
                                <TextField id="project-name" value={this.props.addnewState.value}
                                           onChange={this.setNewValue}/>
                            </Grid>
                            <Grid item xs={1}>
                                <Button variant="contained" type="submit" onClick={this.newProject}>
                                    Add new
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Paper>
                <Paper>
                    <h2>Projects List</h2>
                    <List className={classes.root}>
                        {viewsList}
                    </List>
                </Paper>
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

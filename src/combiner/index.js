'use strict';

import {combineReducers} from 'redux';
import * as reducers from '../components/**/reducer.js';

let reduxs = {};
Object.keys(reducers).forEach((key) => {

    reduxs[reducers[key].name] = reducers[key];
});
const combination = combineReducers(reduxs);

export default combination;
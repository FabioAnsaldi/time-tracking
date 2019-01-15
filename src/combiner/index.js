'use strict';

import {combineReducers} from 'redux';
import * as reducers from '../components/**/reducer.js';

let reduxs = {};
Object.keys(reducers).forEach((key) => {

    let name = key.replace('views$', '')
        .replace('widgets$', '')
        .toLowerCase();
    reduxs[`${name}State`] = reducers[key];
});

const combination = combineReducers(reduxs);

export default combination;
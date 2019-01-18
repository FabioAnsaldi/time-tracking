'use strict';

import {combineReducers} from 'redux';
import * as reducers from '../components/**/reducer.js';

let reduxs = [];
Object.keys(reducers).forEach((key) => {

    let name = key.replace('views$', '')
        .replace('widgets$', '')
        .toLowerCase();
    reduxs[`${name}State`] = reducers[key];
});

//const combination = combineReducers(reduxs);
console.log(Object.keys(reduxs).map((o, i)=>{console.log(o); return o;}));

const combiner = (asyncReducers) => {

    return combineReducers(reduxs);
};

export default combiner;
'use strict';

import {combineReducers} from 'redux';
import applicationState from '../components/application/reducer.js';

const combiner = (asyncReducers) => {

    return combineReducers({applicationState, ...asyncReducers});
};

export default combiner;
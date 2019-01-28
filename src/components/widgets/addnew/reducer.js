'use strict';

import TYPES from './types';

export const initialState = {

    projects: [],
    value: '',
    interval: null,
    error: ''
};

const addnewState = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.RESET_STATE:
            return Object.assign({}, state, initialState);
        case TYPES.SET_PROJECTS:
            return Object.assign({}, state, {'projects': action.projects});
        case TYPES.SET_VALUE:
            return Object.assign({}, state, {'value': action.value});
        case TYPES.SET_INTERVAL:
            return Object.assign({}, state, {'interval': action.interval});
        case TYPES.SET_ERROR:
            return Object.assign({}, state, {'error': action.error});
        default:
            return state;
    }
};

export default addnewState;

'use strict';

import TYPES from './types';

export const initialState = {

    open: false,
    title: '',
    error: ''
};

const topbarState = (state = initialState, action) => {

    switch (action.type) {

        case TYPES.RESET_STATE:
            return Object.assign({}, state, initialState);
        case TYPES.SET_OPEN:
            return Object.assign({}, state, {'open': action.open});
        case TYPES.SET_TITLE:
            return Object.assign({}, state, {'title': action.title});
        case TYPES.SET_ERROR:
            return Object.assign({}, state, {'error': action.error});
        default:
            return state;
    }
};

export default topbarState;

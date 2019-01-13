'use strict';

import TYPES from './types';

export const initialState = {

    pages: [],
    error: ''
};

const layoutReducer = (state = initialState, action) => {

    switch (action.type) {

        case TYPES.RESET_STATE:
            return Object.assign({}, state, initialState);
        case TYPES.SET_PAGES:
            return Object.assign({}, state, {'pages': action.pages});
        case TYPES.SET_ERROR:
            return Object.assign({}, state, {'error': action.error});
        default:
            return state;
    }
};

export default layoutReducer;

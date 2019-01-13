'use strict';

import TYPES from './types';

export const initialState = {};

const layoutReducer = (state = initialState, action) => {

    switch (action.type) {

        case TYPES.RESET_STATE:
            return Object.assign({}, state, initialState);
        default:
            return state;
    }
};

export default layoutReducer;

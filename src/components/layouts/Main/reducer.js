'use strict';

import TYPES from './types';

export const initialState = {
    pages: []
};

const mainReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case TYPES.RESET_STATE:
            return Object.assign( {}, state, initialState );
        case TYPES.SET_PAGES:
            return Object.assign( {}, state, { 'pages': action.pages } );
        default:
            return state;
    }
};

export default mainReducer;

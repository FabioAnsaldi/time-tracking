'use strict';

import { initialState } from './reducer';
import TYPES from './types';

export const resetMain = () => {
    return Object.assign( {}, {
        type: TYPES.RESET_STATE
    }, initialState );
};

export const setPages = ( input ) => {
    return {
        type: TYPES.SET_PAGES,
        pages: input
    };
};

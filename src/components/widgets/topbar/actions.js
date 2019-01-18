'use strict';

import { initialState } from './reducer';
import TYPES from './types';

export const resetState = () => {

    return Object.assign( {}, {

        type: TYPES.RESET_STATE
    }, initialState );
};

export const setOpen = (input) => {

    return {

        type: TYPES.SET_OPEN,
        open: input
    };
};

export const setTitle = (input) => {

    return {

        type: TYPES.SET_TITLE,
        title: input
    };
};

export const setError = (input) => {

    return {

        type: TYPES.SET_ERROR,
        error: input
    };
};
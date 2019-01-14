'use strict';

import {initialState} from './reducer';
import TYPES from './types';

export const resetLayout = () => {

    return Object.assign({}, {

        type: TYPES.RESET_STATE
    }, initialState);
};

export const setError = (input) => {

    return {

        type: TYPES.SET_ERROR,
        error: input
    };
};

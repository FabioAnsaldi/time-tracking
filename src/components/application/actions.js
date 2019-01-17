'use strict';

import {initialState} from './reducer';
import TYPES from './types';

export const resetApplication = () => {

    return Object.assign({}, {

        type: TYPES.RESET_STATE
    }, initialState);
};

export const setRoutes = (input) => {

    return {

        type: TYPES.SET_ROUTES,
        routes: input
    };
};

export const setError = (input) => {

    return {

        type: TYPES.SET_ERROR,
        error: input
    };
};

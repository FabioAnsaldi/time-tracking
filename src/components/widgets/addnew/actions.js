'use strict';

import {initialState} from './reducer';
import TYPES from './types';

export const resetAddnew = () => {

    return Object.assign({}, {

        type: TYPES.RESET_STATE
    }, initialState);
};

export const setProjects = (input) => {

    return {

        type: TYPES.SET_PROJECTS,
        projects: input
    };
};

export const setValue = (input) => {

    return {

        type: TYPES.SET_VALUE,
        value: input
    };
};

export const setError = (input) => {

    return {

        type: TYPES.SET_ERROR,
        error: input
    };
};

'use strict';

import {initialState} from './reducer';
import TYPES from './types';

export const resetState = () => {
    return Object.assign({}, {
        type: TYPES.RESET_STATE
    }, initialState);
};

export const setMenuState = (input) => {
    return {
        type: TYPES.SET_MENU_STATE,
        menuOpen: input
    };
};

export const setRoutes = (input) => {
    return {
        type: TYPES.SET_ROUTES,
        routes: input
    };
};

export const errorRequest = (input) => {
    return {
        type: TYPES.ERROR_REQUEST,
        error: input
    };
};

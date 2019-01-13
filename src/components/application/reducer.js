'use strict';

import TYPES from './types';

export const initialState = {

    menuOpen: false,
    routes: [
        {
            default: true,
            label: 'Home',
            path: '/home',
            viewFolderName: 'Home'
        }
    ],
    error: ''
};

const applicationReducer = (state = initialState, action) => {

    switch (action.type) {

        case TYPES.RESET_STATE:
            return Object.assign({}, state, initialState);
        case TYPES.SET_ROUTES:
            return Object.assign({}, state, {'routes': action.routes});
        case TYPES.SET_MENU_STATE:
            return Object.assign({}, state, {'menuOpen': action.menuOpen});
        case TYPES.ERROR_REQUEST:
            return Object.assign({}, state, {'error': action.error});
        default:
            return state;
    }
};

export default applicationReducer;

'use strict';

import TYPES from './types';

export const initialState = {

    menuOpen: false,
    routes: [
        {
            default: true,
            label: 'Home',
            path: '/home',
            viewFolderName: 'home'
        },
        {
            label: 'Tracking',
            path: '/tracking',
            viewFolderName: 'tracking'
        }
    ],
    pages: [],
    error: ''
};

const applicationState = (state = initialState, action) => {

    switch (action.type) {

        case TYPES.RESET_STATE:
            return Object.assign({}, state, initialState);
        case TYPES.SET_ROUTES:
            return Object.assign({}, state, {'routes': action.routes});
        case TYPES.SET_MENU_STATE:
            return Object.assign({}, state, {'menuOpen': action.menuOpen});
        case TYPES.SET_PAGES:
            return Object.assign({}, state, {'pages': action.pages});
        case TYPES.SET_ERROR:
            return Object.assign({}, state, {'error': action.error});
        default:
            return state;
    }
};

export default applicationState;

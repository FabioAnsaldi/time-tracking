'use strict';

import TYPES from './types';

export const initialState = {

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
    error: ''
};

const applicationState = (state = initialState, action) => {

    switch (action.type) {

        case TYPES.RESET_STATE:
            return Object.assign({}, state, initialState);
        case TYPES.SET_ROUTES:
            return Object.assign({}, state, {'routes': action.routes});
        case TYPES.SET_ERROR:
            return Object.assign({}, state, {'error': action.error});
        default:
            return state;
    }
};

export default applicationState;

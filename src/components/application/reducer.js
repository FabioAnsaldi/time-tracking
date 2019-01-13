'use strict';

import TYPES from './types';

export const initialState = {
    layout: 'Main',
    player: 'X',
    lang: 'it',
    avaibleLang: ['it', 'en'],
    loading: [],
    menuOpen: false,
    user: null,
    routes: [
        {
            default: true,
            label: 'Home',
            path: '/home',
            viewFolderName: 'Home'
        }
    ],
    error: '',
    accesstoken: false
};

const controllerReducer = (state = initialState, action) => {
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

export default controllerReducer;

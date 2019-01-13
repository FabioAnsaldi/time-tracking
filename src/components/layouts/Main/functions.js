'use strict';

export const menuWillChange = ( nextProps, state ) => {
    return JSON.stringify( state.controllerReducer.routes ) !== JSON.stringify( nextProps.controllerReducer.routes );
};

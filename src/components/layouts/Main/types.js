let actions_types = [ 'RESET_STATE', 'SET_PAGES' ];

const TYPES = {};
actions_types.map( ( string ) => {
    TYPES[ string ] = 'MAIN_' + string;
} );

export default TYPES;
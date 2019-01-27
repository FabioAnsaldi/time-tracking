let actions_types = [
    'RESET_STATE',
    'SET_PROJECTS',
    'SET_VALUE',
    'SET_ERROR'
];

const TYPES = {};
actions_types.map( ( string ) => {

    TYPES[ string ] = 'ADDNEW_' + string;
} );

export default TYPES;

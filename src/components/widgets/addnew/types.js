let actions_types = [
    'RESET_STATE',
    'SET_PROJECTS',
    'SET_VALUE',
    'ADD_NEWPROJECT',
    'SET_ERROR'
];

const TYPES = {};
actions_types.map( ( string ) => {

    TYPES[ string ] = 'ADDNEW_' + string;
} );

export default TYPES;

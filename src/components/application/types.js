let actions_types = [
    'RESET_STATE',
    'SET_ROUTES',
    'SET_MENU_STATE',
    'ERROR_REQUEST'
];

const TYPES = {};
actions_types.map((string) => {
    TYPES[string] = 'APPLICATION_' + string;
});

export default TYPES;
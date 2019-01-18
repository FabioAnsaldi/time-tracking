let actions_types = [
    'RESET_STATE',
    'SET_OPEN',
    'SET_TITLE',
    'SET_ERROR'
];

const TYPES = {};
actions_types.map((string) => {

    TYPES[string] = 'TOPBAR_' + string;
});

export default TYPES;

let actions_types = [
    'RESET_STATE',
    'SET_PAGES',
    'SET_ERROR'
];

const TYPES = {};
actions_types.map((string) => {

    TYPES[string] = 'LAYOUT_' + string;
});

export default TYPES;
let actions_types = ['RESET_STATE'];

const TYPES = {};
actions_types.map((string) => {

    TYPES[string] = 'TOPBAR_' + string;
});

export default TYPES;

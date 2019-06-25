export const addDep = (text) => ({
    type: 'ADD_DEP',
    text
});

export const delDep = (index) => ({
    type: 'DEL_DEP',
    index
});
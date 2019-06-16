export const setCode = (text) => ({
    type: 'SET_CODE',
    text
});

export const setDesc = (text) => ({
    type: 'SET_DESC',
    text
});

export const addSpec = (obj) => ({
    type: 'ADD_SPEC',
    obj
});

export const delSpec = (index) => ({
    type: 'DEL_SPEC',
    index
});
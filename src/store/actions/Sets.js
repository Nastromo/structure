import API from '../../utils/Api';

export const setLoading = (bool) => ({
    type: 'SET_SET_LOAD',
    bool
});

export const setError = (bool) => ({
    type: 'SET_SET_ERROR',
    bool
});

export const setSelectedSetRow = (index) => ({
    type: 'SET_SELECTED_SET_ROW',
    index
});

export const setSets = (list) => ({
    type: 'SET_SETS_LIST',
    list
});

export const setClient = (text) => ({
    type: 'SET_SET_CLIENT',
    text
});

export const setTestCode = (text) => ({
    type: 'SET_SET_TEST_CODE',
    text
});

export const addClient = (text) => ({
    type: 'ADD_CLIENT',
    text
});

export const delClient = (text) => ({
    type: 'DEL_CLIENT',
    text
});

export const setCode = (text) => ({
    type: 'SET_SET_CODE',
    text
});

export const setDesc = (text) => ({
    type: 'SET_SET_DESC',
    text
});

export const setSpec = (text) => ({
    type: 'SET_SET_SPEC',
    text
});

export const getTestCodes = (char) => {
    return async (dispatch, getState) => {
        dispatch(setTestCode(char));

    const res = await API.get(`/v1/ordersets`);

    }
}







export const getSets = () => {
    return async (dispatch, getState) => {
        try {
            dispatch(setLoading(true));
            const res = await API.get(`/v1/ordersets`);
            dispatch(setChosenSet(res.data[0]));
            dispatch(setSelectedSetRow(0));
            dispatch(setLoading(false));
            dispatch(setSets(res.data));
        } catch (err) {
            dispatch(setLoading(false));
            dispatch(setError(true));
            console.log(err);
        }
    }
}

export const setSetRelative = (index) => {
    return async (dispatch, getState) => {
        const list = getState().sets;
        dispatch(setMode(false));
        dispatch(setChosenSet(list[index]));
        dispatch(setSelectedSetRow(index));
    }
}

export const setMode = (bool) => ({
    type: 'SET_CREATE_MODE_SET',
    bool
});

export const setChosenSet = (obj) => ({
    type: 'SET_CHOSEN_SET',
    obj
});

export const setCreateMode = () => {
    return async (dispatch, getState) => {
        dispatch(setMode(true));
        dispatch(setChosenSet({}));
        dispatch(setSelectedSetRow(0));
    }
};

export const createSet = (test) => {
    return async (dispatch, getState) => {
        try {
            const res = await API.post(`/v1/create-set`, test);
            dispatch(setChosenSet(res.data[0]));
            dispatch(setSelectedSetRow(0));
            dispatch(setSets(res.data));
            dispatch(setMode(false));
        } catch (err) {
            dispatch(setError(true));
            console.log(err);
        }
    }
}

export const updateSet = (set) => {
    return async (dispatch, getState) => {
        try {
            const res = await API.post(`/v1/update-set`, set);
            dispatch(setSets(res.data));
        } catch (err) {
            console.log(err);
        }
    }
}
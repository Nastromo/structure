import API from '../../utils/Api';
import { showNotification } from './Notification';



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

export const showLoadingRow = (bool) => ({
    type: 'SHOW_LOADING_ROW',
    bool
});

export const setTestListForDropdown = (list) => ({
    type: 'SHOW_TESTS_FOR_DROP',
    list
});

export const addTestRow = (obj) => ({
    type: 'ADD_TEST_ROW',
    obj
});

export const delTest = (index) => ({
    type: 'DEL_TEST_ROW',
    index
});

export const addTest = (index) => {
    return async (dispatch, getState) => {
        const tests = getState().testsDropdown;
        dispatch(setTestListForDropdown([]));
        dispatch(setTestCode(""));
        dispatch(addTestRow({
            code: tests[index].code,
            description: tests[index].description,
        }));
    }
}

export const getTestCodes = (word) => {
    return async (dispatch, getState) => {
        try {
            dispatch(setTestCode(word));
            dispatch(showLoadingRow(true));
            const res = await API.get(`/v1/tests?key=${word}`);
            dispatch(showLoadingRow(false));
            dispatch(setTestListForDropdown(res.data));
        } catch (err) {
            dispatch(showLoadingRow(false));
            console.log(err);
        }
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

export const createSet = (set) => {
    return async (dispatch, getState) => {
        try {
            const res = await API.post(`/v1/create-set`, set);
            dispatch(setChosenSet(res.data[0]));
            dispatch(setSelectedSetRow(0));
            dispatch(setSets(res.data));
            dispatch(setMode(false));
            dispatch(showNotification(`Created!`, `notification-green`));
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
            dispatch(setSelectedSetRow(0));
            dispatch(setSets(res.data));
            dispatch(showNotification(`Updated!`, `notification-blue`));
        } catch (err) {
            console.log(err);
        }
    }
}
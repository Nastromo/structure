import API from '../../utils/Api';
import { showNotification } from './Notification';


export const getTests = () => {
    return async (dispatch, getState) => {
        try {
            dispatch(setLoading(true));
            const res = await API.get(`/v1/tests`);
            dispatch(setChosenTest(res.data[0]));
            dispatch(setSelectedTestRow(0));
            dispatch(setLoading(false));
            dispatch(setTests(res.data));
        } catch (err) {
            dispatch(setLoading(false));
            dispatch(setError(true));
            console.log(err);
        }
    }
}

export const setTestRelative = (index) => {
    return async (dispatch, getState) => {
        const list = getState().tests;
        dispatch(setMode(false));
        dispatch(setChosenTest(list[index]));
        dispatch(setSelectedTestRow(index));
    }
}

export const getSpes = () => {
    return async (dispatch, getState) => {
        try {
            const res = await API.get(`/v1/spes`);
            dispatch(setSpes(res.data));
        } catch (err) {
            console.log(err);
        }
    }
}

export const setSpes = (list) => ({
    type: 'SET_SPES',
    list
});

export const setChosenTest = (obj) => ({
    type: 'SET_CHOSEN_TEST',
    obj
});

export const setSelectedTestRow = (index) => ({
    type: 'SET_SELECTED_TEST_ROW',
    index
});

export const setLoading = (bool) => ({
    type: 'SET_TESTS_LOAD',
    bool
});

export const setError = (bool) => ({
    type: 'SET_TESTS_ERROR',
    bool
});

export const setTests = (list) => ({
    type: 'SET_TESTS',
    list
});

export const setMode = (bool) => ({
    type: 'SET_CREATE_MODE_TEST',
    bool
});

export const setCreateMode = () => {
    return async (dispatch, getState) => {
        dispatch(setMode(true));
        dispatch(setChosenTest({}));
        dispatch(setSelectedTestRow(0));
    }
};

export const setCode = (text) => ({
    type: 'SET_TEST_CODE',
    text
});

export const setDesc = (text) => ({
    type: 'SET_DESC_TEST',
    text
});

export const setLab = (text) => ({
    type: 'SET_LAB_TEST',
    text
});

export const setMailoutCode = (text) => ({
    type: 'SET_MAILOUTCODE_TEST',
    text
});

export const setCentralink = (text) => ({
    type: 'SET_CENTRAL_TEST',
    text
});

export const setVolume = (text) => ({
    type: 'SET_VOLUME_TEST',
    text
});

export const setContainer = (text) => ({
    type: 'SET_CONTA_TEST',
    text
});

export const handleStability = (text) => ({
    type: 'SET_STABILITY_TEST',
    text
});

export const handleCrit = (text) => ({
    type: 'SET_CRIT_TEST',
    text
});

export const handleInfo = (text) => ({
    type: 'SET_INFO_TEST',
    text
});

export const handleRepa = (text) => ({
    type: 'SET_REPA_TEST',
    text
});

export const setTat = (text) => ({
    type: 'SET_TAT_TEST',
    text
});

export const setMet = (text) => ({
    type: 'SET_MET_TEST',
    text
});

export const setDef = (text) => ({
    type: 'SET_DEF_TEST',
    text
});

export const handleInstruc = (text) => ({
    type: 'SET_INSTRUC_TEST',
    text
});

export const delElem = (index) => ({
    type: 'DEL_TEST_ELEM',
    index
});

export const addElem = (obj) => ({
    type: 'ADD_TEST_ELEM',
    obj
});

export const getElem = (code) => {
    return async (dispatch, getState) => {
        try {
            const res = await API.get(`/v1/elem?code=${code}`);
            dispatch(addElem(res.data));
        } catch (err) {
            console.log(err);
        }
    }
}

export const createTest = (test) => {
    return async (dispatch, getState) => {
        try {
            const res = await API.post(`/v1/create-test`, test);
            dispatch(setChosenTest(res.data[0]));
            dispatch(setSelectedTestRow(0));
            dispatch(setTests(res.data));
            dispatch(setMode(false));
            dispatch(showNotification(`Created!`, `notification-green`));
        } catch (err) {
            dispatch(setError(true));
            console.log(err);
        }
    }
}

export const updateTest = (test) => {
    return async (dispatch, getState) => {
        try {
            const res = await API.post(`/v1/update-test`, test);
            dispatch(setTests(res.data));
            dispatch(showNotification(`Updated!`, `notification-blue`));
        } catch (err) {
            console.log(err);
        }
    }
}
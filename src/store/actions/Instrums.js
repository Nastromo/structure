import API from '../../utils/Api';
import { showNotification } from './Notification';


export const addInstrum = (obj) => ({
    type: 'ADD_INSTRUM',
    obj
});

export const delInstrum = (index) => ({
    type: 'DEL_INSTRUM',
    index
});

export const setInstrums = (list) => ({
    type: 'SET_INSTRUMS',
    list
});

export const changeType = (e) => ({
    type: 'CHANGE_INS_TYPE',
    text: e.target.value
});



export const setInsCodes = (list) => ({
    type: 'SET_INS_CODES',
    list
});

export const changeInsSerial = (e) => ({
    type: 'CHANGE_INS_SE',
    text: e.target.value
});

export const changeInsName = (e) => ({
    type: 'CHANGE_INS_NAM',
    text: e.target.value
});

export const getCodes = (word) => {
    return async (dispatch, getState) => {
        try {
            const res = await API.get(`/v1/ins-codes?type=${word}`);
            dispatch(setInsCodes(res.data));
        } catch (err) {
            console.log(err);
        }
    }
}

export const getInstrums = () => {
    return async (dispatch, getState) => {
        try {
            const res = await API.get(`/v1/instrums`);
            dispatch(setInstrums(res.data));
            // dispatch(getCodes(res.data[0].type));
            // dispatch(showInstrum(0));
        } catch (err) {
            console.log(err);
        }
    }
}

export const setInstrum = (obj) => ({
    type: 'SET_INSTRUM',
    obj
});

export const setActiveRow = (index) => ({
    type: 'SET_ACTIVE_INSTRUM_ROW',
    index
});

export const showInstrum = (index) => {
    return async (dispatch, getState) => {
        const list = getState().instrums;
        dispatch(setInstrum(list[index]));
        dispatch(setActiveRow(index));
        dispatch(getCodes(list[index].type));
        dispatch(setCreateMode(false))
    }
}

export const setDeps = (list) => ({
    type: 'SET_DEPS_INSTRUM',
    list
});

export const setCreateMode = (bool) => ({
    type: 'SET_CREATE_MODE_INS_L',
    bool
});

export const createMode = (bool) => {
    return async (dispatch, getState) => {
        dispatch(setInstrum({}));
        dispatch(setCreateMode(bool))
        // dispatch(setActiveRow(0));
    }
}

export const getDeps = () => {
    return async (dispatch, getState) => {
        const res = await API.get(`/v1/deps`);
        dispatch(setDeps(res.data));
    }
}

export const handleCreate = () => {
    return async (dispatch, getState) => {
        const instrum = getState().instrum;
        try {
            const res = await API.post(`/v1/create-instrum`, instrum);
            dispatch(setInstrums(res.data));
            dispatch(setInstrum(res.data[0]));
            dispatch(setCreateMode(false))
            dispatch(setActiveRow(0));
            dispatch(showNotification(`Created!`, `notification-green`));
        } catch (err) {
            console.log(err);
        }
    }
}

export const handleUpdate = () => {
    return async (dispatch, getState) => {
        const instrum = getState().instrum;
        try {
            const res = await API.post(`/v1/update-instrum`, instrum);
            dispatch(setInstrums(res.data));
            dispatch(setInstrum(res.data[0]));
            dispatch(setActiveRow(0));
            dispatch(showNotification(`Updated!`, `notification-blue`));
        } catch (err) {
            console.log(err);
        }
    }
}


import API from '../../utils/Api';
import { showNotification } from './Notification';



export const setElements = (list) => ({
    type: 'SET_ELEMENTS',
    list
});

export const setElement = (obj) => ({
    type: 'SET_ELEMENT',
    obj
});

export const showElement = (index) => {
    return async (dispatch, getState) => {
        const list = getState().elementsList;
        dispatch(setElement(list[index]));
        dispatch(setActiveElemRow(index));
    }
};

export const setActiveElemRow = (index) => ({
    type: 'SET_ELEMENT_ROW',
    index
});

export const getElements = (id) => {
    return async (dispatch, getState) => {
        try {
            const res = await API.get('/v1/elements');
            dispatch(setElements(res.data));
            dispatch(setElement(res.data[0]));
            dispatch(setActiveElemRow(0));
        } catch (err) {
            console.log(err);
        }
    }
};


export const changeInsCode = (e) => ({
    type: 'SET_INS_CODE',
    text: e.target.value
});

export const changeHcLow = (e) => ({
    type: 'SET_INS_HCLOW',
    text: e.target.value
});

export const changeHcHigh = (e) => ({
    type: 'SET_HC_HIGH',
    text: e.target.value
});

export const changeCode = (e) => ({
    type: 'SET_ELEMENT_CODE',
    text: e.target.value
});

export const changeDesc = (e) => ({
    type: 'SET_ELEMENT_DESC',
    text: e.target.value
});

export const changeUnits = (e) => ({
    type: 'SET_ELEMENT_UNITS',
    text: e.target.value
});

export const changeLoinc = (e) => ({
    type: 'SET_ELEMENT_LOINC',
    text: e.target.value
});

export const changeAnlLow = (e) => ({
    type: 'SET_ELEMENT_ANL_LOW',
    text: e.target.value
});

export const changeAnlHigh = (e) => ({
    type: 'SET_ELEMENT_HIGH',
    text: e.target.value
});

export const changeDohLoinc = (e) => ({
    type: 'SET_ELEMENT_DOH_LOIC',
    text: e.target.value
});

export const changeDohCriteria = (e) => ({
    type: 'SET_ELEMENT_DOH_CRITARIA',
    text: e.target.value
});

export const changeDohResults = (e) => ({
    type: 'SET_ELEMENT_DOH_RES',
    text: e.target.value
});

export const changeInter = (e) => ({
    type: 'SET_ELEMENT_INTER',
    text: e.target.value
});

export const setTypes = (list) => ({
    type: 'SET_INST_TYPES',
    list
});

export const getTypes = () => {
    return async (dispatch, getState) => {
        try {
            const res = await API.get('/v1/types');
            dispatch(setTypes(res.data));
        } catch (err) {
            console.log(err);
        }
    }
};

export const setCreate = (bool) => ({
    type: 'SET_CREATE_MODE_ELEM',
    bool
});

export const setCreateMode = (bool) => {
    return async (dispatch, getState) => {
        dispatch(setElement({}));
        dispatch(setCreate(bool));
    }
};

export const handleCreate = () => {
    return async (dispatch, getState) => {
        const elem = getState().element;
        try {
            const res = await API.post(`/v1/create-elem`, elem);
            dispatch(setElements(res.data));
            dispatch(setElement(res.data[0]));
            dispatch(setActiveElemRow(0));
            dispatch(setCreateMode(false));
            dispatch(showNotification(`Created!`, `notification-green`));
        } catch (err) {
            console.log(err);
        }
    }
}

export const handleUpdate = () => {
    return async (dispatch, getState) => {
        const elem = getState().element;
        try {
            const res = await API.post(`/v1/update-elem`, elem);
            dispatch(setElements(res.data));
            dispatch(showNotification(`Updated!`, `notification-blue`));
        } catch (err) {
            console.log(err);
        }
    }
}
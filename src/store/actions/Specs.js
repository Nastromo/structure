import API from '../../utils/Api';



export const setCode = (text) => ({
    type: 'SET_CODE',
    text
});

export const setDesc = (text) => ({
    type: 'SET_DESC',
    text
});

export const showSpecs = (list) => ({
    type: 'SHOW_SPECS',
    list
});

export const delSpec = (index) => ({
    type: 'DEL_SPEC',
    index
});

export const removeSpec = (id) => {
    return async (dispatch, getState) => {
        try {
            const res = await API.post('/v1/delete-spec', { id: id });
            dispatch(showSpecs(res.data));
        } catch (err) {
            console.log(err);
        }
    }
};

export const createSpec = (spec) => {
    return async (dispatch, getState) => {
        try {
            const res = await API.post('/v1/create-spec', spec);
            dispatch(showSpecs(res.data));
        } catch (err) {
            console.log(err);
        }
    }
};

export const getSpecs = () => {
    return async (dispatch, getState) => {
        try {
            const res = await API.get('/v1/specs');
            dispatch(showSpecs(res.data));
        } catch (err) {
            console.log(err);
        }
    }
};
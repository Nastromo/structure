import API from '../../utils/Api';

export const showDeps = (list) => ({
    type: 'SHOW_DEPS',
    list
});

export const delDep = (index) => ({
    type: 'DEL_DEP',
    index
});

export const removeDep = (name) => {
    return async (dispatch, getState) => {
        try {
            const res = await API.post('/v1/delete-dep', { name: name });
            dispatch(showDeps(res.data));
        } catch (err) {
            console.log(err);
        }
    }
};

export const createDep = (name) => {
    return async (dispatch, getState) => {
        try {
            const res = await API.post('/v1/create-dep', { name: name });
            dispatch(showDeps(res.data));
        } catch (err) {
            console.log(err);
        }
    }
};

export const getDeps = () => {
    return async (dispatch, getState) => {
        try {
            const res = await API.get('/v1/deps');
            dispatch(showDeps(res.data));
        } catch (err) {
            console.log(err);
        }
    }
};
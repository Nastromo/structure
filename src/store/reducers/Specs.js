export const code = (state = ``, action) => {
    switch (action.type) {
        case `SET_CODE`:
            return action.text;

        default: return state;
    }
}

export const desc = (state = ``, action) => {
    switch (action.type) {
        case `SET_DESC`:
            return action.text;

        default: return state;
    }
}

export const specList = (state = [], action) => {
    let newState;
    switch (action.type) {
        case `SHOW_SPECS`:
            return action.list;

        case `DEL_SPEC`:
            console.log(action.index)
            newState = JSON.parse(JSON.stringify(state));
            newState.splice(action.index, 1);
            return newState;

        default: return state;
    }
}
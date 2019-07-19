export const instrums = (state = [], action) => {
    switch (action.type) {
        case `SET_INSTRUMS`:
            return action.list;

        default: return state;
    }
}

export const instrum = (state = [], action) => {
    let newState, instruments;
    switch (action.type) {
        case `SET_INSTRUM`:
            return action.obj;

        case `CHANGE_INS_TYPE`:
            newState = JSON.parse(JSON.stringify(state));
            newState.type = action.text;
            return newState;

        case `SET_DROP_DOWN_OPTION_INSTRUM`:
            newState = JSON.parse(JSON.stringify(state));
            newState.department = action.obj.option;
            return newState;

        case `ADD_INSTRUM`:
            newState = JSON.parse(JSON.stringify(state));
            instruments = JSON.parse(newState.instruments ? newState.instruments : "[]");
            instruments.push(action.obj);
            newState.instruments = JSON.stringify(instruments);
            return newState;

        case `DEL_INSTRUM`:
            newState = JSON.parse(JSON.stringify(state));
            instruments = JSON.parse(newState.instruments);
            instruments.splice(action.index, 1);
            newState.instruments = JSON.stringify(instruments);
            return newState;

        default: return state;
    }
}

export const activeInstrumRow = (state = 0, action) => {
    switch (action.type) {
        case `SET_ACTIVE_INSTRUM_ROW`:
            return action.index;

        default: return state;
    }
}

export const isInsCreateMode = (state = false, action) => {
    switch (action.type) {
        case `SET_CREATE_MODE_INS_L`:
            return action.bool;

        default: return state;
    }
}

export const departaments = (state = [], action) => {
    switch (action.type) {
        case `SET_DEPS_INSTRUM`:
            return action.list;

        default: return state;
    }
}

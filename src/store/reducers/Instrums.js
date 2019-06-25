export const instrums = (state = [], action) => {
    let newState;
    switch (action.type) {
        case `ADD_INSTRUM`:
            newState = JSON.parse(JSON.stringify(state));
            newState.push(action.obj);
            return newState;
        case `DEL_INSTRUM`:
            newState = JSON.parse(JSON.stringify(state));
            newState.splice(action.index, 1);
            return newState;
        default: return state;
    }
}
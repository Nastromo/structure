export const deps = (state = [], action) => {
    let newState;
    switch (action.type) {
        case `ADD_DEP`:
            newState = JSON.parse(JSON.stringify(state));
            newState.push(action.text);
            return newState;

        case `DEL_DEP`:
            newState = JSON.parse(JSON.stringify(state));
            newState.splice(action.index, 1);
            return newState;

        default: return state;
    }
}
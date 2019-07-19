export const deps = (state = [], action) => {
    let newState;
    switch (action.type) {
        case `SHOW_DEPS`:
            return action.list;

        case `DEL_DEP`:
            newState = JSON.parse(JSON.stringify(state));
            newState.splice(action.index, 1);
            return newState;

        default: return state;
    }
}
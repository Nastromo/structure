export const defineList = (state = [], action) => {
    let newState;
    switch (action.type) {
        case `ADD_DEF`:
            newState = JSON.parse(JSON.stringify(state));
            newState.push(action.item);
            return newState;

        case `DEL_DEF`:
            newState = JSON.parse(JSON.stringify(state));
            newState.splice(action.index, 1);
            return newState;

        default: return state;
    }
}
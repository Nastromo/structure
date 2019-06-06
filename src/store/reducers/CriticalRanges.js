export const criticalRangesList = (state = [], action) => {
    let newState;
    switch (action.type) {
        case `ADD_CRIT`:
            newState = JSON.parse(JSON.stringify(state));
            newState.push(action.item);
            return newState;

        case `DEL_CRIT`:
            newState = JSON.parse(JSON.stringify(state));
            newState.splice(action.index, 1);
            return newState;

        default: return state;
    }
}
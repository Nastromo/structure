export const normalRangesList = (state = [], action) => {
    let newState;
    switch (action.type) {
        case `ADD_NORM`:
            newState = JSON.parse(JSON.stringify(state));
            newState.push(action.item);
            return newState;

        case `DEL_NORM`:
            newState = JSON.parse(JSON.stringify(state));
            newState.splice(action.index, 1);
            return newState;

        default: return state;
    }
}
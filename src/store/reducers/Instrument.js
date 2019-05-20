export const instrument = (state = {}, action) => {
    let newState;
    switch (action.type) {
        case `SET_INSTRUM_SERIAL`:
            newState = JSON.parse(JSON.stringify(state));
            newState.serial = action.text;
            return newState;

        default: return state;
    }
}
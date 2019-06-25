export const instrument = (state = "", action) => {
    switch (action.type) {
        case `SET_INSTRUM_SERIAL`:
            return action.text;

        default: return state;
    }
}
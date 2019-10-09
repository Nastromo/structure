export const insCodes = (state = [], action) => {
    switch (action.type) {
        case `SET_INS_CODES`:
            return action.list;

        default: return state;
    }
}
export const dropdownStatus = (state = {}, action) => {
    let newState;
    if (action.type === `SHOW_DROP_DOWN`) {
        switch (action.obj.id) {
            case `departament`:
                newState = JSON.parse(JSON.stringify(state));
                newState.departament = action.obj.status;
                return newState;
            case `resultTypes`:
                newState = JSON.parse(JSON.stringify(state));
                newState.resultTypes = action.obj.status;
                return newState;
            case `alergy`:
                newState = JSON.parse(JSON.stringify(state));
                newState.alergy = action.obj.status;
                return newState;
            case `drug`:
                newState = JSON.parse(JSON.stringify(state));
                newState.drug = action.obj.status;
                return newState;
            case `finalize`:
                newState = JSON.parse(JSON.stringify(state));
                newState.finalize = action.obj.status;
                return newState;
            case `alpha`:
                newState = JSON.parse(JSON.stringify(state));
                newState.alpha = action.obj.status;
                return newState;
            default: return state;
        }
    } else {
        return state;
    }
}

export const dropdownOption = (state = {}, action) => {
    let newState;
    if (action.type === `SET_DROP_DOWN_OPTION`) {
        switch (action.obj.id) {
            case `departament`:
                newState = JSON.parse(JSON.stringify(state));
                newState.departament = action.obj.option;
                return newState;
            case `resultTypes`:
                newState = JSON.parse(JSON.stringify(state));
                newState.resultTypes = action.obj.option;
                return newState;
            case `alergy`:
                newState = JSON.parse(JSON.stringify(state));
                newState.alergy = action.obj.option;
                return newState;
            case `drug`:
                newState = JSON.parse(JSON.stringify(state));
                newState.drug = action.obj.option;
                return newState;
            case `finalize`:
                newState = JSON.parse(JSON.stringify(state));
                newState.finalize = action.obj.option;
                return newState;
            case `alpha`:
                newState = JSON.parse(JSON.stringify(state));
                newState.alpha = action.obj.option;
                return newState;
            default: return state;
        }
    } else {
        return state;
    }
}
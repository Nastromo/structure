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
            case `resTypes`:
                newState = JSON.parse(JSON.stringify(state));
                newState.status = action.obj.status;
                return newState;
            case `stability`:
                newState = JSON.parse(JSON.stringify(state));
                newState.stability = action.obj.status;
                return newState;
            case `priority`:
                newState = JSON.parse(JSON.stringify(state));
                newState.priority = action.obj.status;
                return newState;
            case `autostat`:
                newState = JSON.parse(JSON.stringify(state));
                newState.autoStat = action.obj.status;
                return newState;
            case `critical`:
                newState = JSON.parse(JSON.stringify(state));
                newState.critical = action.obj.status;
                return newState;
            case `speReq`:
                newState = JSON.parse(JSON.stringify(state));
                newState.speReq = action.obj.status;
                return newState;
            case `shipping`:
                newState = JSON.parse(JSON.stringify(state));
                newState.shipping = action.obj.status;
                return newState;
            case `alternative`:
                newState = JSON.parse(JSON.stringify(state));
                newState.alternative = action.obj.status;
                return newState;
            case `aoe`:
                newState = JSON.parse(JSON.stringify(state));
                newState.aoe = action.obj.status;
                return newState;
            case `genderCrit`:
                newState = JSON.parse(JSON.stringify(state));
                newState.genderCrit = action.obj.status;
                return newState;
            case `genderNorm`:
                newState = JSON.parse(JSON.stringify(state));
                newState.genderNorm = action.obj.status;
                return newState;
            case `igs`:
                newState = JSON.parse(JSON.stringify(state));
                newState.igs = action.obj.status;
                return newState;
            case `perm`:
                newState = JSON.parse(JSON.stringify(state));
                newState.perm = action.obj.status;
                return newState;
            case `departments`:
                newState = JSON.parse(JSON.stringify(state));
                newState.departments = action.obj.status;
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
            case `resTypes`:
                newState = JSON.parse(JSON.stringify(state));
                newState.status = action.obj.option;
                return newState;
            case `stability`:
                newState = JSON.parse(JSON.stringify(state));
                newState.stability = action.obj.option;
                return newState;
            case `priority`:
                newState = JSON.parse(JSON.stringify(state));
                newState.priority = action.obj.option;
                return newState;
            case `autostat`:
                newState = JSON.parse(JSON.stringify(state));
                newState.autoStat = action.obj.option;
                return newState;
            case `critical`:
                newState = JSON.parse(JSON.stringify(state));
                newState.critical = action.obj.option;
                return newState;
            case `speReq`:
                newState = JSON.parse(JSON.stringify(state));
                newState.speReq = action.obj.option;
                return newState;
            case `shipping`:
                newState = JSON.parse(JSON.stringify(state));
                newState.shipping = action.obj.option;
                return newState;
            case `alternative`:
                newState = JSON.parse(JSON.stringify(state));
                newState.alternative = action.obj.option;
                return newState;
            case `aoe`:
                newState = JSON.parse(JSON.stringify(state));
                newState.aoe = action.obj.option;
                return newState;
            case `genderCrit`:
                newState = JSON.parse(JSON.stringify(state));
                newState.genderCrit = action.obj.option;
                return newState;
            case `genderNorm`:
                newState = JSON.parse(JSON.stringify(state));
                newState.genderNorm = action.obj.option;
                return newState;
            case `igs`:
                newState = JSON.parse(JSON.stringify(state));
                newState.igs = action.obj.option;
                return newState;
            case `perm`:
                newState = JSON.parse(JSON.stringify(state));
                newState.perm = action.obj.option;
                return newState;
            default: return state;
        }
    } else {
        return state;
    }
}